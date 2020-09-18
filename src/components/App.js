import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchForm from '../containers/searchForm';
import SuperheroList from '../containers/superheroList';
// import SuperheroDetails from './superheroDetails';

// const App = () => {
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/">
//           <SearchForm />
//           <SuperheroList />
//         </Route>
//         <Route path="details/:id">
//           <SuperheroDetails />
//         </Route>
//       </Switch>
//     </div>
//   </Router>;
// };

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
