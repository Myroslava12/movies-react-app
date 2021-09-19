import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  container: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > *': {
        marginLeft: '2rem',
        color: '#fff',
        fontSize: '1.6rem',
        lineHeight: '2rem',
        textDecoration: 'none'
    }
  }
}));

export const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Link to='/'>Movies</Link>
          <Link to='/rated_movies'>Rated Movies</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
