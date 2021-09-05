import React, { useCallback, useEffect, useReducer } from 'react';
import useMinoReducer from '../hooks/useMinoReducer';
import BoardComponent from './Board';

export default function Game(): React.ReactElement {
  const [shouldClearTimer, timerClearer] = useReducer((state: number) => state + 1, 0);
  const [boardState, boardUpdater] = useReducer((state: number) => state + 1, 0);
  const [squaresRef, moveLeft, moveRight, drop, hardDrop, rotateLeft, rotateRight] = useMinoReducer(
    boardUpdater,
    timerClearer
  );

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
        case 'ArrowUp':
          hardDrop();
          break;
        default:
          break;
      }
    },
    [rotateLeft, rotateRight, moveLeft, moveRight]
  );

  useEffect(() => {
    const id = setInterval(() => {
      console.debug('time elapsed');
      drop();
    }, 1000);
    return () => clearInterval(id);
  }, [drop, shouldClearTimer]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return <>{!squaresRef.current || <BoardComponent boardState={boardState} squares={squaresRef.current} />}</>;
}
