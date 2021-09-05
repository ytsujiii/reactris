import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { getMinoShape, MinoInterface } from '../constants/Mino';
import Square from './Square';

interface Props {
  holdingMino: MinoInterface | undefined;
}

const useStyles = makeStyles({
  row: {
    display: 'flex',
  },
});

export default function HoldingMinoContainer(props: Props): React.ReactElement {
  const { holdingMino } = props;
  const classes = useStyles();

  if (holdingMino) {
    const minoShape = getMinoShape(holdingMino.type, holdingMino.rotation);
    return (
      <>
        {!minoShape ||
          minoShape.map((row, y) => (
            <div className={classes.row} key={y}>
              {row.map((square, x) => (
                <Square state={square} key={x} />
              ))}
            </div>
          ))}
      </>
    );
  } else {
    return <></>;
  }
}
