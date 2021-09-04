import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BlockType, MinoCoord, MinoRotation, MinoShape, MinoType } from '../constants/Mino';
import BoardComponent from './Board';

export default function Game(): React.ReactElement {
  const height = 20;
  const width = 10;
  const [squares, setSquares] = useState<BlockType[][]>();
  const [mino, setMino] = useState<MinoType>();
  const minoRef = useRef<MinoType>();
  const squaresRef = useRef<typeof squares>();
  useEffect(() => {
    minoRef.current = mino;
  }, [mino]);
  useEffect(() => {
    squaresRef.current = squares;
  }, [squares]);

  const placeMinoIfPossible = useCallback((newCoord: MinoCoord, newRotation: MinoRotation): void => {
    console.debug('placeMinoIfPossible');
    console.debug('oldSquares:', squaresRef.current);
    console.debug('newCoord:', newCoord);
    console.debug('newRotation:', newRotation);
    if (!minoRef.current || !squaresRef.current) {
      console.log('mino undefined');
      return;
    }

    const newSquares = copySquares(squaresRef.current);
    const oldMinoShape = MinoShape[minoRef.current.type][minoRef.current.rotation];
    const newMinoShape = MinoShape[minoRef.current.type][newRotation];
    // delete current mino
    oldMinoShape.map((row, dy) => {
      row.map((square, dx) => {
        if (!minoRef.current) return;
        else if (!isValidCoord({ y: minoRef.current.coord.y + dy, x: minoRef.current.coord.x + dx })) {
          return;
        }
        newSquares[minoRef.current.coord.y + dy][minoRef.current.coord.x + dx] = BlockType.none;
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
      return;
    }
    setMino({ ...minoRef.current, coord: newCoord, rotation: newRotation });
    setSquares(newSquares);
  }, []);

  const move = useCallback(
    (diff: MinoCoord): void => {
      if (!minoRef.current) return;
      const newCoord = { y: minoRef.current.coord.y + diff.y, x: minoRef.current.coord.x + diff.x };
      placeMinoIfPossible(newCoord, minoRef.current.rotation);
    },
    [placeMinoIfPossible]
  );
  const moveLeft = useCallback((): void => {
    move({ y: 0, x: -1 });
  }, [move]);
  const moveRight = useCallback((): void => {
    move({ y: 0, x: 1 });
  }, [move]);
  const drop = useCallback((): void => {
    move({ y: 1, x: 0 });
  }, [move]);
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
  }, [rotate]);
  const rotateRight = useCallback((): void => {
    rotate(1);
  }, [rotate]);
  const initializeSquares = useCallback((initialMino: MinoType): BlockType[][] => {
    const initialMinoShape = MinoShape[initialMino.type][initialMino.rotation];
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

  const handleKeyPress = useCallback(
    (ev: KeyboardEvent) => {
      console.log(ev.key);
      switch (ev.key) {
        case 'z':
          rotateLeft();
          break;
        case 'x':
          rotateRight();
          break;
        case 'ArrowLeft':
          moveLeft();
          break;
        case 'ArrowRight':
          moveRight();
          break;
        default:
          break;
      }
    },
    [rotateLeft, rotateRight, moveLeft, moveRight]
  );

  // initialize game
  useEffect(() => {
    console.info('Initializing game');

    const initialMino = { rotation: 0 as MinoRotation, type: BlockType.i, coord: { y: 0, x: 3 } };
    console.debug('Initial mino:', initialMino);
    const initialSquares = initializeSquares(initialMino);
    setMino(initialMino);
    setSquares(initialSquares);
  }, []);
  useEffect(() => {
    const id = setInterval(() => {
      console.debug('time elapsed');
      drop();
    }, 1000);
    return () => clearInterval(id);
  }, [drop]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return <>{!squares || <BoardComponent squares={squares} />}</>;
}
