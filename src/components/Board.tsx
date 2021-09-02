import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { BlockType } from '../constants/Mino';
import Square from './Square';

interface Props {
  squares: BlockType[][];
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
