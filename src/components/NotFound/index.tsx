import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    marginTop: '2rem'
  },
  link: {
    textAlign: 'center',
    fontSize: '1.6rem',
    lineHeight: '2rem',
    color: '#000',
    display: 'block'
  }
}));

export const NotFound = () =>  {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h2' className={classes.title} component='h2' gutterBottom>404 - Not Found!</Typography>
      <Link to="/" className={classes.link}>
        Go Home
      </Link>
    </div>
)};
