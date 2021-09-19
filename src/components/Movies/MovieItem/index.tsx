import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core';
import { Movie } from '../../../store/movies/types';
import { Link } from 'react-router-dom';
import { MovieDetails } from '../../../store/movieDetails/types';
import { Rate } from '../../Rate';
import { useSelector } from 'react-redux';

interface MovieProps {
  item: Movie | MovieDetails; 
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '.1rem solid #ccc',
    width: '30rem',
    margin: '0 2rem 4rem 2rem',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '30rem',
    borderRadius: '1rem',
    '& > image': {
      objectFix: 'contain'
    }
  },
  imageBox: {
    width: '100%'
  },
  title: {
    marginTop: '1rem',
    '& > span': {
      fontSize: '2rem',
      lineHeight: '2.4rem',
      fontWeight: 600,
      letterSpacing: 0
    },
    '& > p': {
      fontSize: '1.4rem',
      lineHeight: '1.7rem',
      marginTop: '1rem'
    }
  },
  subtitle: {
    textAlign: 'left',
    width: '100%',

    '& > span': {
      fontSize: '1.6rem',
      lineHeight: '2rem',
      color: '#000',
    }
  },
  link: {
    width: '100%',
    display: 'block',
    padding: '1rem',
    textAlign: 'center',
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#3f51b5',
    fontWeight: 600,
    fontSize: '1.4rem',
    marginTop: '2rem'
  },
  rate: {
    '& svg': {
      width: '1.6rem',
      height: '1.6rem'
    }
  }
}));

export const MovieItem = ({ item }: MovieProps) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar className={classes.imageBox}>
        <Avatar className={classes.image} alt={`${item.Type} - ${item.Title}`} src={item.Poster}></Avatar>
      </ListItemAvatar>
      <ListItemText className={classes.title} primary={item.Title} secondary={item.Year}></ListItemText>
      <ListItemText className={classes.subtitle} primary={`Type: ${item.Type}`}></ListItemText>
      {item.Genre && <ListItemText className={classes.subtitle} primary={`Genre: ${item.Genre}`}></ListItemText>}
      <Rate item={item} className={classes.rate} />
      <Link className={classes.link} to={`/movies/${item.imdbID}`}>Show Details</Link>
    </ListItem>
  );
};
