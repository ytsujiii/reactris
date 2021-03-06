import React, { useCallback, useEffect, useRef } from 'react';
import {
  BlockType,
  getInitialMino,
  getMinoShape,
  MinoCoord,
  MinoInterface,
  MinoRotation,
  MinoType,
} from '../constants/Mino';
import srs, { SrsPhase } from '../logics/srs';
import useMinoBag from './UseMinoBag';

const height = 20;
const width = 10;
const emptySquares = Array.from(Array(20), () => {
  return Array.from(Array(10), () => BlockType.none);
});

export default function useMinoReducer(
  boardUpdater: () => void,
  timerClearer: () => void
): [
  React.MutableRefObject<MinoInterface | undefined>,
  React.MutableRefObject<BlockType[][]>,
  React.MutableRefObject<MinoInterface | undefined>,
  () => void,
  () => void,
  () => void,
  () => void,
  () => void,
  () => void,
  () => void,
  MinoType[] | undefined,
  MinoType[] | undefined
] {
  const [minoRef, changeMino, minoBag, nextMinoBag] = useMinoBag();
  const holdingMinoRef = useRef<MinoInterface>();
  const squaresRef = useRef<BlockType[][]>(emptySquares);
  const stiffTimerId = useRef<number>();
  const alreadyHolded = useRef<boolean>(false);
  const minoShadowRef = useRef<MinoInterface>();

  // initialize game
  useEffect(() => {
    if (!minoRef.current) return;
    console.info('Initializing game');
    squaresRef.current = initializeSquares(minoRef.current);
    drawShadow();
    boardUpdater();
  }, []);

  const scan = (): void => {
    const emptyLine = Array.from(Array(width), () => BlockType.none);
    // 揃っていない行のみを抽出する
    const scanned = squaresRef.current.filter((row) => {
      for (let i = 0; i < row.length; i++) {
        if (row[i] === BlockType.none) {
          return true;
        }
      }
      return false;
    });
    squaresRef.current = [...Array.from(Array(height - scanned.length), () => emptyLine), ...scanned];
  };

  const drawShadow = (): void => {
    if (!minoRef.current || !squaresRef.current) return;
    let mino = { ...minoRef.current };
    while (canMoveDown(mino)) {
      mino = { ...mino, coord: mino.coord.down() };
    }
    minoShadowRef.current = mino;
  };

  const hold = () => {
    if (!minoRef.current) return;
    if (alreadyHolded.current) return;

    const newSquares = copySquares(squaresRef.current);
    const currentMinoShape = getMinoShape(minoRef.current.type, minoRef.current.rotation);
    // delete current mino
    currentMinoShape.map((row, dy) => {
      row.map((square, dx) => {
        if (!minoRef.current) return;
        else if (!isValidCoord(minoRef.current.coord.move({ dy, dx }))) {
          return;
        }

        if (square !== BlockType.none) {
          newSquares[minoRef.current.coord.y + dy][minoRef.current.coord.x + dx] = BlockType.none;
        }
      });
    });

    if (holdingMinoRef.current) {
      const tmp = getInitialMino(holdingMinoRef.current.type);
      holdingMinoRef.current = getInitialMino(minoRef.current.type);
      minoRef.current = tmp;
    } else {
      holdingMinoRef.current = getInitialMino(minoRef.current.type);
      changeMino();
    }

    const nextMinoShape = getMinoShape(minoRef.current.type, minoRef.current.rotation);
    nextMinoShape.map((row, dy) => {
      row.map((square, dx) => {
        if (square === BlockType.none) return;
        if (!minoRef.current) return;
        newSquares[minoRef.current.coord.y + dy][minoRef.current.coord.x + dx] = square;
      });
    });
    squaresRef.current = newSquares;
    alreadyHolded.current = true;
    drawShadow();
    boardUpdater();
  };

  const placeMinoIfPossible = useCallback((newCoord: MinoCoord, newRotation: MinoRotation): boolean => {
    if (!minoRef.current || !squaresRef.current) {
      return false;
    }

    const newSquares = copySquares(squaresRef.current);
    const oldMinoShape = getMinoShape(minoRef.current.type, minoRef.current.rotation);
    const newMinoShape = getMinoShape(minoRef.current.type, newRotation);
    // delete current mino
    oldMinoShape.map((row, dy) => {
      row.map((square, dx) => {
        if (!minoRef.current) return;
        else if (!isValidCoord(minoRef.current.coord.move({ dy, dx }))) {
          return;
        }

        if (square !== BlockType.none) {
          newSquares[minoRef.current.coord.y + dy][minoRef.current.coord.x + dx] = BlockType.none;
        }
      });
    });
    // place new mino
    let invalid = false;
    newMinoShape.map((row, dy) => {
      row.map((square, dx) => {
        if (square === BlockType.none) {
          return;
        }

        if (!isValidCoord(newCoord.move({ dy, dx }))) {
          invalid = true;
          return;
        } else if (newSquares[newCoord.y + dy][newCoord.x + dx] !== BlockType.none) {
          invalid = true;
          return;
        }
        newSquares[newCoord.y + dy][newCoord.x + dx] = square;
      });
    });

    if (invalid) {
      return false;
    }

    minoRef.current = { ...minoRef.current, coord: newCoord, rotation: newRotation };
    squaresRef.current = newSquares;
    drawShadow();
    return true;
  }, []);

  const onMinoStiff = (): void => {
    if (!minoRef.current) return;
    scan();
    changeMino();
    placeMinoIfPossible(minoRef.current.coord, minoRef.current.rotation);
    alreadyHolded.current = false;
    timerClearer();
  };

  const canMoveDown = (
    mino: MinoInterface | undefined = minoRef.current,
    squares: BlockType[][] | undefined = squaresRef.current
  ): boolean => {
    if (!mino || !squares) return false;
    const { type, rotation, coord } = mino;
    // ミノの領域を行が逆順になるように走査する
    const minoShape = getMinoShape(type, rotation);
    const copiedSquares = copySquares(squares);
    return minoShape
      .slice()
      .reverse()
      .every((row, dy) => {
        const y = coord.y + minoShape.length - dy - 1;
        return row.every((block, dx) => {
          const x = coord.x + dx;
          if (block === BlockType.none) return true; // 空白は無視
          if (!isValidCoord(new MinoCoord({ y: y + 1, x }))) return false; // 真下が盤面外
          if (copiedSquares[y + 1][x] !== BlockType.none) return false; // 真下がブロック
          copiedSquares[y][x] = BlockType.none;
          return true;
        });
      });
  };

  const moveLeft = useCallback((): void => {
    if (!minoRef.current) return;

    window.clearTimeout(stiffTimerId.current);
    stiffTimerId.current = undefined;
    placeMinoIfPossible(minoRef.current.coord.left(), minoRef.current.rotation);
    if (!canMoveDown()) {
      stiffTimerId.current = window.setTimeout(() => {
        onMinoStiff();
        stiffTimerId.current = undefined;
      }, 500);
    }
    boardUpdater();
  }, [placeMinoIfPossible]);
  const moveRight = useCallback((): void => {
    if (!minoRef.current) return;
    window.clearTimeout(stiffTimerId.current);
    stiffTimerId.current = undefined;
    placeMinoIfPossible(minoRef.current.coord.right(), minoRef.current.rotation);
    if (!canMoveDown()) {
      stiffTimerId.current = window.setTimeout(() => {
        onMinoStiff();
        stiffTimerId.current = undefined;
      }, 500);
    }
    boardUpdater();
  }, [placeMinoIfPossible]);
  const drop = useCallback((): void => {
    if (stiffTimerId.current || !minoRef.current) return;
    placeMinoIfPossible(minoRef.current.coord.down(), minoRef.current.rotation);

    if (!canMoveDown() && !stiffTimerId.current) {
      stiffTimerId.current = window.setTimeout(() => {
        onMinoStiff();
        stiffTimerId.current = undefined;
      }, 500);
    }
    boardUpdater();
  }, [placeMinoIfPossible]);
  const hardDrop = (): void => {
    if (!minoRef.current) return;
    window.clearTimeout(stiffTimerId.current);
    while (canMoveDown()) {
      placeMinoIfPossible(minoRef.current.coord.down(), minoRef.current.rotation);
    }
    onMinoStiff();
    boardUpdater();
  };
  const rotate = useCallback(
    (rotationDiff: 1 | -1): void => {
      if (!minoRef.current) return;

      window.clearTimeout(stiffTimerId.current);
      stiffTimerId.current = undefined;

      for (let srsPhase = 0; srsPhase <= 4; srsPhase++) {
        const mino = srs(minoRef.current, rotationDiff, srsPhase as SrsPhase);
        if (placeMinoIfPossible(mino.coord, mino.rotation)) return;
      }

      if (!canMoveDown()) {
        stiffTimerId.current = window.setTimeout(() => {
          onMinoStiff();
          stiffTimerId.current = undefined;
        }, 500);
      }
    },
    [placeMinoIfPossible]
  );
  const rotateLeft = useCallback((): void => {
    rotate(-1);
    boardUpdater();
  }, [rotate]);
  const rotateRight = useCallback((): void => {
    rotate(1);
    boardUpdater();
  }, [rotate]);
  const initializeSquares = useCallback((initialMino: MinoInterface): BlockType[][] => {
    const initialMinoShape = getMinoShape(initialMino.type, initialMino.rotation);
    const initialSquares = Array.from(Array(height)).map(() => {
      return Array.from(Array(width)).map(() => BlockType.none);
    });
    initialMinoShape.map((row, dy) => {
      row.map((square, dx) => {
        initialSquares[initialMino.coord.y + dy][initialMino.coord.x + dx] = square;
      });
    });
    return initialSquares;
  }, []);
  const copySquares = useCallback((squares: BlockType[][]): BlockType[][] => {
    return squares.map((row) => row.map((square) => square)); // deepcopied board
  }, []);
  const isValidCoord = (c: MinoCoord): boolean => {
    return 0 <= c.x && 0 <= c.y && c.x < width && c.y < height;
  };

  return [
    holdingMinoRef,
    squaresRef,
    minoShadowRef,
    moveLeft,
    moveRight,
    drop,
    hardDrop,
    rotateLeft,
    rotateRight,
    hold,
    minoBag,
    nextMinoBag,
  ];
}
