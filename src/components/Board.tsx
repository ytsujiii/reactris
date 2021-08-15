import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { BoardSquares } from '../constants/Board';
import Square from './Square';

interface Props {
  squares: BoardSquares;
}

const useStyles = makeStyles({
  row: {
    display: 'flex',
  },
});

export default function BoardComponent(props: Props): React.ReactElement {
  const classes = useStyles();
  const { squares } = props;

  return (
    <>
      {squares.map((row, y) => (
        <div className={classes.row} key={y}>
          {row.map((square, x) => (
            <Square state={square} key={x} />
          ))}
        </div>
      ))}
    </>
  );
}
