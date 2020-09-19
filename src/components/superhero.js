import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentHero } from '../actions/index';

const SuperheroCard = props => {
  const {
    id, name, image, superhero, setCurrentHero,
  } = props;

  const handleClick = () => {
    setCurrentHero(superhero);
  };

  return (
    <Link to={`/details/${id}`} onClick={handleClick}> {/* new onClick*/}
      <div className="hero-element">
        <div className="card-container" id={id}>
          <img src={image} alt={name} />
          <h1>{name}</h1>
        </div>
      </div>
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentHero: superhero => {
    dispatch(setCurrentHero(superhero));
  },
}); // new

SuperheroCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  superhero: PropTypes.objectOf(PropTypes.any).isRequired,
  setCurrentHero: PropTypes.func.isRequired, // new
};

export default connect(null, mapDispatchToProps)(SuperheroCard);
