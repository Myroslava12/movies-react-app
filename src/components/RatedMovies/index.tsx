import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  List,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getRatedMovies } from '../../store/ratedMovies/selectors';
import { MovieItem } from '../Movies/MovieItem';
import { MovieDetails } from '../../store/movieDetails/types';

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    marginTop: '4rem'
  },
  button: {
    margin: '0 0 4rem auto',
    display: 'block',
  }
}));

export const RatedMovies = () => {
  const classes = useStyles();
  const ratedMovies = useSelector(getRatedMovies);
  const [ratedMoviesData, setRatedMoviesData] = useState<any>([]);
  const [filters, setFilters] = useState<[] | string[]>([]);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedFilters, setSelectedFilters] = useState<any>([]);

  useEffect(() => {
    setRatedMoviesData(ratedMovies);
  }, [ratedMovies]);

  useEffect(() => {
    if (ratedMovies.length !== 0) {
      const getFilters = ratedMovies.map(item => item.Genre.split(', ')).flat();

      const getNotDuplicateFilters = getFilters.reduce<string[]>((acc, curr) => {
        if (acc.includes(curr)) {
            return acc;
        }
        return [...acc, curr];
      }, []);

      setFilters(getNotDuplicateFilters);
    }
  }, [ratedMovies]);

  const toggleModal = () => {
    setOpen((prev: boolean) => !prev);
  };

  const handleClose = () => {
    setOpen(false);

    const filteredData = ratedMoviesData.reduce((acc: MovieDetails[], curr: MovieDetails) => {
      if (selectedFilters.filter((filter: string) => curr.Genre.includes(filter)).length === 0) {
        return acc;
      }
    
      return [...acc, curr];
    }, []);

    setRatedMoviesData(filteredData);
  };

  const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    if (checked && !selectedFilters.includes(value)) {
      setSelectedFilters((prev: string[]) => ([...prev, value]));
    } else {
      const filteredFilters = selectedFilters.filter((filter: string) => filter !== value);
      setSelectedFilters(filteredFilters);
    }
  }

  const clearFilters = () => {
    setRatedMoviesData(ratedMovies);
    setSelectedFilters([]);
    setOpen(false);
  }

  return (
    <Container maxWidth='lg'>
      <Typography variant='h2' className={classes.title} component='h2' gutterBottom>Rated Movies</Typography>

      {filters.length !== 0 && <Button className={classes.button} variant='contained' color='primary' onClick={toggleModal}>
        Filters
      </Button>}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={toggleModal}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{'Check Movie Genre'}</DialogTitle>
        <DialogContent>
          {filters.map((filter, i) => {
            return <FormControlLabel
              key={`${i}-${filter}`}
              control={
                <Checkbox
                  checked={selectedFilters.includes(filter)}
                  onChange={handleChangeFilter}
                  name='checkedB'
                  value={filter}
                  color='primary'
                />
              }
              label={filter}
            />
          })}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={clearFilters} color='primary'>
            Clear filters
          </Button>
          <Button autoFocus onClick={toggleModal} color='primary'>
            Close
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            Apply
          </Button>
        </DialogActions>
      </Dialog>

      {ratedMoviesData.length === 0 ? 
        <Typography variant='h3' className={classes.title} component='h3' gutterBottom>Not found Rated Movies</Typography> : 
        <List className={classes.list}>
          {ratedMoviesData.map((item: MovieDetails, i: string) => {
            return <MovieItem key={`${i}.${item.Title} - ${item.imdbID}`} item={item} />
          })}
      </List>}
    </Container>
  );
};
