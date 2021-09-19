import { Movies } from './Movies';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Navigation } from './Navigation';
import { MovieDetailsComponent } from './MovieDetails';
import { RatedMovies } from './RatedMovies';

function App() {

  return (
    <div className="wrapper">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/movies/:id' component={MovieDetailsComponent} />
          <Route exact path='/rated_movies' component={RatedMovies} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
