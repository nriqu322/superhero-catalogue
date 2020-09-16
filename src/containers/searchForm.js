import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterSuperhero } from '../actions';
import getSuperhero from '../services/superheroApi';

const SuperheroForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (name !== '') {
      getSuperhero(name).then(response => {
        if (response) {
          filterSuperhero(response);
        }
      });
    }
  };

  const handleChange = event => {
    setName({ [event.target.name]: event.target.value });
  };

  return (
    <form id="superhero-form" onSubmit={handleSubmit}>
      <input value={name} name="name" type="text" placeholder="Type a superhero name" onChange={handleChange} />
      <button type="submit">SEARCH</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  filterSuperhero: name => {
    dispatch(filterSuperhero(name));
  },
});

export default connect(null, mapDispatchToProps)(SuperheroForm);
