import React, { useCallback, useEffect } from 'react';
import useMinoReducer from '../reducers/MinoReducer';
import BoardComponent from './Board';

export default function Game(): React.ReactElement {
  const [squares, moveLeft, moveRight, drop, rotateLeft, rotateRight] = useMinoReducer();

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
