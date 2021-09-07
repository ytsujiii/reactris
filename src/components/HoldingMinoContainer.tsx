import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { BlockType, getFittedMinoShape, MinoInterface } from '../constants/Mino';
import Square from './Square';

interface Props {
  holdingMino: MinoInterface | undefined;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid white',
    height: 100,
    width: 120,
    overflow: 'visible',
    marginRight: 10,
  },
  row: {
    display: 'flex',
  },
  label: {
    position: 'absolute',
    top: 35,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
    backgroundColor: 'black',
    padding: '0 5px 0 7px',
    letterSpacing: 2,
  },
});

export default function HoldingMinoContainer(props: Props): React.ReactElement {
  const { holdingMino } = props;
  const classes = useStyles();

  const minoShape = holdingMino ? getFittedMinoShape(holdingMino.type, holdingMino.rotation) : [[BlockType.none]];
  return (
    <div className={classes.root}>
      <div className={classes.label}>HOLD</div>
      {!minoShape ||
        minoShape.map((row, y) => (
          <div className={classes.row} key={y}>
            {row.map((square, x) => (
              <Square state={square} key={x} />
            ))}
          </div>
        ))}
    </div>
  );
}
