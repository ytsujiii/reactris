import React, { useCallback, useEffect, useRef } from 'react';
import { BlockType, getMinoShape, MinoCoord, MinoInterface, MinoRotation } from '../constants/Mino';
import useMinoBag from './UseMinoBag';

export default function useMinoReducer(
  updater: () => void
): [React.MutableRefObject<BlockType[][]>, () => void, () => void, () => void, () => void, () => void, () => void] {
  const width = 10;
  const height = 20;
  const [minoRef, changeMino] = useMinoBag();
  const squaresRef = useRef<BlockType[][]>([]);

  // initialize game
  useEffect(() => {
    if (!minoRef.current) return;
    console.info('Initializing game');
    squaresRef.current = initializeSquares(minoRef.current);
    updater();
  }, []);

  const placeMinoIfPossible = useCallback((newCoord: MinoCoord, newRotation: MinoRotation): boolean => {
    console.debug('placeMinoIfPossible');
    console.debug('oldSquares:', squaresRef.current);
    console.debug('newCoord:', newCoord);
    console.debug('newRotation:', newRotation);
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
        else if (!isValidCoord({ y: minoRef.current.coord.y + dy, x: minoRef.current.coord.x + dx })) {
          return;
        }

        if (square !== BlockType.none) {
          newSquares[minoRef.current.coord.y + dy][minoRef.current.coord.x + dx] = BlockType.none;
        }
      });
    });
    // place new mino
    console.debug('ミノを置けるか・動かせるかをチェックする');
    console.debug(newSquares);
    let invalid = false;
    newMinoShape.map((row, dy) => {
      row.map((square, dx) => {
        console.debug('チェック対象:', { y: newCoord.y + dy, x: newCoord.x + dx });
        if (square === BlockType.none) {
          console.debug('ここにはブロックがないので無視');
          return;
        }

        if (!isValidCoord({ y: newCoord.y + dy, x: newCoord.x + dx })) {
          console.debug('ブロックが画面外にはみ出している');
          invalid = true;
          return;
        } else if (newSquares[newCoord.y + dy][newCoord.x + dx] !== BlockType.none) {
          console.debug('ここには既にブロックがある', newSquares[newCoord.y + dy][newCoord.x + dx]);
          invalid = true;
          return;
        }
        console.debug('OK!!!');
        newSquares[newCoord.y + dy][newCoord.x + dx] = square;
      });
    });

    if (invalid) {
      console.log('Cannot perform this move');
      return false;
    }

    minoRef.current = { ...minoRef.current, coord: newCoord, rotation: newRotation };
    squaresRef.current = newSquares;
    return true;
  }, []);

  const move = useCallback(
    (diff: MinoCoord): boolean => {
      if (!minoRef.current) return false;
      const newCoord = { y: minoRef.current.coord.y + diff.y, x: minoRef.current.coord.x + diff.x };
      return placeMinoIfPossible(newCoord, minoRef.current.rotation);
    },
    [placeMinoIfPossible]
  );
  const moveLeft = useCallback((): void => {
    move({ y: 0, x: -1 });
    updater();
  }, [move]);
  const moveRight = useCallback((): void => {
    move({ y: 0, x: 1 });
    updater();
  }, [move]);
  const drop = useCallback((): void => {
    const result = move({ y: 1, x: 0 });
    if (!result) {
      changeMino();
    }
    updater();
  }, [move]);
  const hardDrop = (): void => {
    // eslint-disable-next-line no-empty
    while (move({ y: 1, x: 0 })) {}
    changeMino();
    updater();
  };
  const rotate = useCallback(
    (rotationDiff: 1 | 3): void => {
      if (!minoRef.current) return;
      const newRotation = ((minoRef.current.rotation + rotationDiff) % 4) as MinoRotation;
      placeMinoIfPossible(minoRef.current.coord, newRotation);
    },
    [placeMinoIfPossible]
  );
  const rotateLeft = useCallback((): void => {
    rotate(3);
    updater();
  }, [rotate]);
  const rotateRight = useCallback((): void => {
    rotate(1);
    updater();
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

  return [squaresRef, moveLeft, moveRight, drop, hardDrop, rotateLeft, rotateRight];
}
