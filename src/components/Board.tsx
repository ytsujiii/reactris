import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { BlockType } from '../constants/Mino';
import Square from './Square';

interface Props {
  boardState: number;
  squares: BlockType[][];
}

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
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
  const { squares } = props;

  return (
    <div className={classes.root}>
      {squares.map((row, y) => (
        <div className={classes.row} key={y}>
          {row.map((square, x) => (
            <Square state={square} key={x} />
          ))}
        </div>
      ))}
    </div>
  );
}
