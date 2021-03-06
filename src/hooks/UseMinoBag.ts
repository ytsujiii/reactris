import React, { useCallback, useEffect, useRef } from 'react';
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

export default function useMinoBag(): [
  React.MutableRefObject<MinoInterface | undefined>,
  () => void,
  MinoType[] | undefined,
  MinoType[] | undefined
] {
  const minoBag = useRef<MinoType[]>();
  const nextMinoBag = useRef<MinoType[]>();
  const popMinoBag = useCallback((): MinoInterface | undefined => {
    if (!minoBag.current) return;
    return getInitialMino(minoBag.current.shift() as MinoType);
  }, []);
  const mino = useRef<MinoInterface>();

  useEffect(() => {
    if (mino.current) return;
    minoBag.current = getNewMinoBag();
    nextMinoBag.current = getNewMinoBag();
    mino.current = popMinoBag();
  }, []);

  const changeMino = useCallback(() => {
    if (!minoBag.current) return;

    if (minoBag.current.length <= 0) {
      minoBag.current = nextMinoBag.current;
      nextMinoBag.current = getNewMinoBag();
      mino.current = popMinoBag();
    } else {
      mino.current = popMinoBag();
    }
  }, []);

  return [mino, changeMino, minoBag.current, nextMinoBag.current];
}
