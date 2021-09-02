import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BlockType, MinoCoord, MinoRotation, MinoShape, MinoType } from '../constants/Mino';
import BoardComponent from './Board';

export default function Game(): React.ReactElement {
  const height = 20;
  const width = 10;
  const [squares, setSquares] = useState<BlockType[][]>();
  const [mino, setMino] = useState<MinoType>();
  const minoRef = useRef<MinoType>();
  useEffect(() => {
    minoRef.current = mino;
  }, [mino]);

  const moveLeft = useCallback((): void => {
    move({ y: 0, x: -1 });
  }, []);
  const moveRight = useCallback((): void => {
    move({ y: 0, x: 1 });
  }, []);
  const move = useCallback(
    (diff: MinoCoord): void => {
      if (!minoRef.current || !squares) return;
      const newCoord = { y: minoRef.current.coord.y + diff.y, x: minoRef.current.coord.x + diff.x };
      const result = placeMinoIfPossible(squares, newCoord, minoRef.current.rotation);
      if (result) {
        setSquares(result);
        setMino({ ...minoRef.current, coord: newCoord });
      }
    },
    [squares]
  );
  const rotateLeft = useCallback((): void => {
    rotate(3);
  }, []);
  const rotateRight = useCallback((): void => {
    rotate(1);
  }, []);
  const rotate = useCallback(
    (rotationDiff: 1 | 3): void => {
      if (!minoRef.current || !squares) return;
      const newRotation = ((minoRef.current.rotation + rotationDiff) % 4) as MinoRotation;
      const result = placeMinoIfPossible(squares, minoRef.current.coord, newRotation);
      if (result) {
        setMino({ ...minoRef.current, rotation: newRotation });
        setSquares(result);
      }
    },
    [squares]
  );
  const placeMinoIfPossible = useCallback(
    (oldSquares: BlockType[][], newCoord: MinoCoord, newRotation: MinoRotation): BlockType[][] | null => {
      console.debug('placeMinoIfPossible');
      console.debug('oldSquares:', oldSquares);
      console.debug('newCoord:', newCoord);
      console.debug('newRotation:', newRotation);
      if (!mino) {
        console.log('mino undefined');
        return null;
      }

      const newSquares = copySquares(oldSquares);
      const oldMinoShape = MinoShape[mino.type][mino.rotation];
      const newMinoShape = MinoShape[mino.type][newRotation];
      // delete current mino
      oldMinoShape.map((row, dy) => {
        row.map((square, dx) => {
          newSquares[mino.coord.y + dy][mino.coord.x + dx] = BlockType.none;
        });
      });
      // place new mino
      console.debug('ミノを置けるか・動かせるかをチェックする');
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
          } else if (oldSquares[newCoord.y][newCoord.x] !== BlockType.none) {
            console.debug('ここには既にブロックがある');
            invalid = true;
            return;
          }
          newSquares[newCoord.y + dy][newCoord.x + dx] = square;
        });
      });
      return invalid ? null : newSquares;
    },
    [mino]
  );
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
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return <>{!squares || <BoardComponent squares={squares} />}</>;
}
