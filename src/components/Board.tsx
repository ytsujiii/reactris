import React, { useState } from 'react';
import Square from './Square';
import { makeStyles } from '@material-ui/styles';
import { MinoType } from '../constants/Mino';
import Mino from '../Mino';
import Board from '../Board';
import { BoardSquares } from '../constants/Board';

interface Props {
    squares: BoardSquares
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
