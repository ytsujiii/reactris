import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { BlockType, getMinoShape, MinoInterface } from '../constants/Mino';
import Square from './Square';

interface Props {
  boardState: number;
  squares: BlockType[][];
  minoShadow: MinoInterface | undefined;
}

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    height: 'fit-content',
    borderLeft: '1px solid white',
    borderRight: '1px solid white',
    borderBottom: '1px solid white',
  },
  row: {
    display: 'flex',
  },
});

export default function BoardComponent(props: Props): React.ReactElement {
  const classes = useStyles();
  const { squares, minoShadow } = props;

  // TODO: copySquaresとまとめる
  const squaresWithShadow = squares.map((row) => {
    return row.map((block) => block);
  });
  if (minoShadow) {
    const minoShadowShape = getMinoShape(minoShadow.type, minoShadow.rotation);
    minoShadowShape.map((row, dy) => {
      row.map((block, dx) => {
        if (block === BlockType.none) return;
        if (squares[minoShadow.coord.y + dy][minoShadow.coord.x + dx] !== BlockType.none) return;
        squaresWithShadow[minoShadow.coord.y + dy][minoShadow.coord.x + dx] = BlockType.shadow;
      });
    });
  }

  return (
    <div className={classes.root}>
      {squaresWithShadow.map((row, y) => (
        <div className={classes.row} key={y}>
          {row.map((square, x) => (
            <Square state={square} key={x} />
          ))}
        </div>
      ))}
    </div>
  );
}
