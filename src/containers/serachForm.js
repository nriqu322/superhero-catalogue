import React from 'react';

const SuperheroForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    [event.target.name] = event.target.value;
  };

  return (
    <form id="superhero-form" onSubmit={handleSubmit}>
      <input name="search" type="text" placeholder="Insert a superhero name" onChange={handleChange} />
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default SuperheroForm;