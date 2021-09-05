import { useCallback, useRef } from 'react';
import { getInitialMino, MinoInterface, MinoType } from '../constants/Mino';

const getNewMinoBag = (): MinoType[] => {
  const minoBag: MinoType[] = [MinoType.i, MinoType.o, MinoType.t, MinoType.s, MinoType.z, MinoType.j, MinoType.l];

  // Fisher-Yates shuffle
  for (let i = minoBag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = minoBag[i];
    minoBag[i] = minoBag[j];
    minoBag[j] = tmp;
  }

  return minoBag;
};

export default function useMinoBag(): [React.MutableRefObject<MinoInterface>, () => void] {
  const minoBag = useRef<MinoType[]>(getNewMinoBag());
  const popMinoBag = (): MinoInterface => {
    return getInitialMino(minoBag.current.pop() as MinoType);
  };
  const mino = useRef<MinoInterface>(popMinoBag());

  const changeMino = useCallback(() => {
    if (minoBag.current.length <= 1) {
      minoBag.current = getNewMinoBag();
      mino.current = popMinoBag();
    } else {
      mino.current = popMinoBag();
    }
  }, []);

  return [mino, changeMino];
}
