import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchForm from '../containers/searchForm';
import SuperheroList from '../containers/superheroList';
import SuperheroDetails from './superheroDetails';
import Header from './header';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <SearchForm />
        <SuperheroList />
      </Route>
      <Route path="/details/:id" component={SuperheroDetails} />
    </Switch>
  </Router>
);

export default App;
