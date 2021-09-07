import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { BlockType } from '../constants/Mino';
import textureI from '../images/texture-i.png';
import textureJ from '../images/texture-j.png';
import textureL from '../images/texture-l.png';
import textureO from '../images/texture-o.png';
import textureS from '../images/texture-s.png';
import textureShadow from '../images/texture-shadow.png';
import textureT from '../images/texture-t.png';
import textureZ from '../images/texture-z.png';

interface Props {
  state: BlockType;
}

const useStyles = makeStyles({
  square: {
    width: '24px',
    height: '24px',
    backgroundSize: '100%',
  },
  i: {
    backgroundImage: `url(${textureI})`,
  },
  o: {
    backgroundImage: `url(${textureO})`,
  },
  t: {
    backgroundImage: `url(${textureT})`,
  },
  s: {
    backgroundImage: `url(${textureS})`,
  },
  z: {
    backgroundImage: `url(${textureZ})`,
  },
  j: {
    backgroundImage: `url(${textureJ})`,
  },
  l: {
    backgroundImage: `url(${textureL})`,
  },
  shadow: {
    backgroundImage: `url(${textureShadow})`,
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
      case BlockType.shadow:
        return classes.shadow;
      default:
        return null;
    }
  }, []);
  return <div className={clsx(classes.square, getSquareStyle(state) || '')} />;
}
