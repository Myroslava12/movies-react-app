import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, .5)',
    '& > *': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1
    }
  }
}));

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress></CircularProgress>
    </div>
  );
};
