import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import getSuperhero from '../services/superheroApi';
import Superhero from '../components/superhero';
import { filterSuperhero } from '../actions';

const SuperheroList = () => {
  const [superheroList, setSuperheroList] = useState([]);

  useEffect(() => {
    const response = getSuperhero();
    setSuperheroList(response.data);
    console.log(response);
  }, []); // remove the empty array to update every time it changes

  return (
    <>
      <div className="superhero-list">
        {
        superheroList.map(superhero => (
          <Superhero key={superhero.id} superhero={superhero} />
        ))
        }
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  superheroList: state.superheroList,
});

const mapDispatchToProps = dispatch => ({
  filterSuperhero: superhero => {
    dispatch(filterSuperhero(superhero));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroList);
