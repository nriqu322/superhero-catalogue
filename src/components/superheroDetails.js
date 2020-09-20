import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SuperheroDetails = props => {
  const { match } = props;
  const { id } = match.params;
  const { superheroes } = props;
  const currentHero = superheroes[id];

  console.log(currentHero);

  return (
    <div className="superhero-details">
      <h1>Hello Details Page</h1>
      <img src={currentHero.image.url} alt="hero" />
      <br />
      { currentHero.name }
      <br />
      { currentHero.appearance.gender }
      <br />
      { currentHero.powerstats.power }
    </div>
  );
};

SuperheroDetails.propTypes = {
  superheroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //   }),
  // }).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  superheroes: state.superheroes.superheroes,
  currentHero: state.superheroes.currentHero,
});

export default connect(mapStateToProps, null)(SuperheroDetails);
