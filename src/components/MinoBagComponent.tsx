import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { getFittedMinoShape, MinoType } from '../constants/Mino';
import Square from './Square';

interface Props {
  minoBag: MinoType[] | undefined;
  nextMinoBag: MinoType[] | undefined;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid white',
    marginLeft: 10,
    width: 120,
    height: 400,
    padding: '30px 0',
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
  row: {
    display: 'flex',
  },
});

export default function MinoBagComponent(props: Props): React.ReactElement {
  const { minoBag, nextMinoBag } = props;
  const classes = useStyles();

  if (!minoBag || !nextMinoBag) {
    return <></>;
  } else {
    const nexts = [...minoBag, ...nextMinoBag].slice(0, 5).map((minoType) => getFittedMinoShape(minoType, 0));
    return (
      <div className={classes.root}>
        <div className={classes.label}>NEXT</div>
        {nexts.map((minoShape, i) => (
          <div key={i}>
            {minoShape.map((row, y) => (
              <div className={classes.row} key={y}>
                {row.map((square, x) => (
                  <Square state={square} key={x} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
