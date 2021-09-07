import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Game from './Game';

const useStyles = makeStyles({
  root: {
    paddingTop: 50,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

function App(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Game />
    </div>
  );
}

export default App;
