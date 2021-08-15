import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { MinoType } from '../constants/Mino';

interface Props {
    state: MinoType,
}

const useStyles = makeStyles({
    square: {
        border: 'solid 1px black',
        width: '20px',
        height: '20px',
    },
    i: {
        backgroundColor: 'cyan',
    },
    o: {
        backgroundColor: 'yellow',
    },
    t: {
        backgroundColor: 'purple',
    },
    s: {
        backgroundColor: 'lightgreen',
    },
    z: {
        backgroundColor: 'red',
    },
    j: {
        backgroundColor: 'blue',
    },
    l: {
        backgroundColor: 'orange',
    },
});


export default function Square(props: Props): React.ReactElement {
    const classes = useStyles();
    const { state } = props;
    const getSquareStyle = useCallback((state: MinoType) => {
        switch(state) {
            case MinoType.i: return classes.i;
            case MinoType.o: return classes.o;
            case MinoType.t: return classes.t;
            case MinoType.s: return classes.s;
            case MinoType.z: return classes.z;
            case MinoType.j: return classes.j;
            case MinoType.l: return classes.l;
            default: return null;
        }
    }, []);
    return (
        <div className={clsx(classes.square, getSquareStyle(state) || '')} />
    );
}
