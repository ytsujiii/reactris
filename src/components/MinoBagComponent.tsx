import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { getMinoShape, MinoType } from '../constants/Mino';
import Square from './Square';

interface Props {
  minoBag: MinoType[] | undefined;
  nextMinoBag: MinoType[] | undefined;
}

const useStyles = makeStyles({
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
    const nexts = [...minoBag, ...nextMinoBag].slice(0, 5).map((minoType) => getMinoShape(minoType, 0));
    return (
      <div>
        <div>Next</div>
        {nexts.map((minoShape) => (
          <>
            {minoShape.map((row, y) => (
              <div className={classes.row} key={y}>
                {row.map((square, x) => (
                  <Square state={square} key={x} />
                ))}
              </div>
            ))}
          </>
        ))}
      </div>
    );
  }
}
