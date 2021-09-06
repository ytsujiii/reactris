import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { BlockType, getMinoShape, MinoType } from '../constants/Mino';
import Square from './Square';

interface Props {
  minoBag: MinoType[] | undefined;
  nextMinoBag: MinoType[] | undefined;
}

const useStyles = makeStyles({
  row: {
    display: 'flex',
  },
  next: {
    margin: '25px 0',
  },
});

export default function MinoBagComponent(props: Props): React.ReactElement {
  const { minoBag, nextMinoBag } = props;
  const classes = useStyles();

  if (!minoBag || !nextMinoBag) {
    return <></>;
  } else {
    const nexts = [...minoBag, ...nextMinoBag].slice(0, 5).map((minoType) => {
      return getMinoShape(minoType, 0).filter((row) => {
        return row.some((block) => block !== BlockType.none);
      });
    });
    return (
      <div>
        {nexts.map((minoShape, i) => (
          <div key={i} className={classes.next}>
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
