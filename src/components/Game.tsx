import React, { useCallback, useEffect, useState } from 'react';
import Board from '../Board';
import { MinoType } from '../constants/Mino';
import Mino from '../Mino';
import BoardComponent from './Board';

const useForceUpdate = () => {
  const [value, setValue] = useState<boolean>(true);
  return () => setValue(!value);
};

export default function Game(): React.ReactElement {
  const forceUpdate = useForceUpdate();
  const [board, setBoard] = useState<Board>();
  const [squares, setSquares] = useState<Array<Array<MinoType>>>();
  const [currentMino, setCurrentMino] = useState<Mino>();
  const handleKeyPress = useCallback(
    (ev: KeyboardEvent) => {
      if (!board || !squares || !currentMino) {
        return;
      }
      if (ev.key === 'z') {
        setSquares(currentMino.rotateLeft(board, squares));
      } else if (ev.key === 'x') {
        setSquares(currentMino.rotateRight(board, squares));
      }
      forceUpdate();
    },
    [board, squares, currentMino]
  );

  // initialize game
  useEffect(() => {
    const newBoard = new Board(20, 10);
    const initialMino = new Mino(0, 0, { y: 0, x: 3 });
    const initialSquares = newBoard.buildSquares();
    setBoard(newBoard);
    setCurrentMino(initialMino);
    setSquares(newBoard.placeMinoIfPossible(initialSquares, initialMino, initialMino.coord, initialMino.rotation));
    forceUpdate();
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return <>{!squares || <BoardComponent squares={squares} />}</>;
}
