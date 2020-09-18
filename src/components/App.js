import React from 'react';
import SearchForm from '../containers/searchForm';
import SuperheroList from '../containers/superheroList';

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <SearchForm />
        <SuperheroList />
      </div>
    </div>
  );
}

export default App;
