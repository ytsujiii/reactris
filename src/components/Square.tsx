import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { BlockType } from '../constants/Mino';

interface Props {
  state: BlockType;
}

const useStyles = makeStyles({
  square: {
    width: '20px',
    height: '20px',
  },
  i: {
    backgroundColor: 'cyan',
  },
  o: {
    backgroundColor: 'yellow',
  },
  t: {
    backgroundColor: 'purple',
  },
  s: {
    backgroundColor: 'lightgreen',
  },
  z: {
    backgroundColor: 'red',
  },
  j: {
    backgroundColor: 'blue',
  },
  l: {
    backgroundColor: 'orange',
  },
});

export default function Square(props: Props): React.ReactElement {
  const classes = useStyles();
  const { state } = props;
  const getSquareStyle = useCallback((state: BlockType) => {
    switch (state) {
      case BlockType.i:
        return classes.i;
      case BlockType.o:
        return classes.o;
      case BlockType.t:
        return classes.t;
      case BlockType.s:
        return classes.s;
      case BlockType.z:
        return classes.z;
      case BlockType.j:
        return classes.j;
      case BlockType.l:
        return classes.l;
      default:
        return null;
    }
  }, []);
  return <div className={clsx(classes.square, getSquareStyle(state) || '')} />;
}
