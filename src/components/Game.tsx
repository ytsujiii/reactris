import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import useMinoReducer from '../hooks/useMinoReducer';
import BoardComponent from './Board';
import HoldingMinoContainer from './HoldingMinoContainer';
import MinoBagComponent from './MinoBagComponent';

export default function Game(): React.ReactElement {
  const das = 100; // (ms)
  const [shouldClearTimer, timerClearer] = useReducer((state: number) => state + 1, 0);
  const [boardState, boardUpdater] = useReducer((state: number) => state + 1, 0);
  const [dropping, setDropping] = useState<boolean>(false);
  const [movingLeft, setMovingLeft] = useState<boolean>(false);
  const [movingRight, setMovingRight] = useState<boolean>(false);
  const timeoutIdRef = useRef<number>();
  const intervalIdRef = useRef<number>();
  const [
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
  ] = useMinoReducer(boardUpdater, timerClearer);

  const handleKeyDown = useCallback(
    async (ev) => {
      if (ev.repeat) return;
      switch (ev.key) {
        case 'z':
          rotateLeft();
          break;
        case 'x':
          rotateRight();
          break;
        case 'ArrowUp':
          hardDrop();
          break;
        case ' ':
          hold();
          break;
        case 'ArrowDown':
          setDropping(true);
          break;
        case 'ArrowLeft':
          setMovingLeft(true);
          break;
        case 'ArrowRight':
          setMovingRight(true);
          break;
        default:
          break;
      }
    },
    [rotateLeft, rotateRight, hardDrop, hold]
  );
  const handleKeyUp = useCallback((ev) => {
    switch (ev.key) {
      case 'ArrowDown':
        setDropping(false);
        break;
      case 'ArrowLeft':
        setMovingLeft(false);
        break;
      case 'ArrowRight':
        setMovingRight(false);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    if (!dropping) return;
    const id = setInterval(() => {
      drop();
    }, 50);
    return () => clearInterval(id);
  }, [dropping]);
  useEffect(() => {
    if (!movingLeft) return;
    moveLeft();
    timeoutIdRef.current = window.setTimeout(() => {
      intervalIdRef.current = window.setInterval(() => moveLeft(), 25);
    }, das);
    return () => {
      window.clearTimeout(timeoutIdRef.current);
      window.clearInterval(intervalIdRef.current);
    };
  }, [movingLeft]);
  useEffect(() => {
    if (!movingRight) return;
    moveRight();
    timeoutIdRef.current = window.setTimeout(() => {
      intervalIdRef.current = window.setInterval(() => moveRight(), 25);
    }, das);
    return () => {
      window.clearTimeout(timeoutIdRef.current);
      window.clearInterval(intervalIdRef.current);
    };
  }, [movingRight]);

  useEffect(() => {
    if (dropping) return;
    const id = setInterval(() => {
      console.debug('time elapsed');
      drop();
    }, 1000);
    return () => clearInterval(id);
  }, [drop, shouldClearTimer, dropping]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div>
      <HoldingMinoContainer holdingMino={holdingMinoRef.current} />
      <BoardComponent boardState={boardState} squares={squaresRef.current} minoShadow={minoShadowRef.current} />
      <MinoBagComponent minoBag={minoBag} nextMinoBag={nextMinoBag} />
    </div>
  );
}
