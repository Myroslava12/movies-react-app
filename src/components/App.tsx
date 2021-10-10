import { Movies } from './Movies';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Navigation } from './Navigation';
import { MovieDetailsComponent } from './MovieDetails';
import { RatedMovies } from './RatedMovies';
import { NotFound } from './NotFound';

function App() {

  return (
    <div className="wrapper">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route path='/movies/:id' component={MovieDetailsComponent} />
          <Route path='/rated_movies' component={RatedMovies} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
