import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentHero } from '../actions/index';
import stamp from '../resources/stamp.png';

const SuperheroCard = props => {
  const {
    id, name, image, superhero, setCurrentHero,
  } = props;

  const handleClick = () => {
    setCurrentHero(superhero);
  };

  const { biography } = superhero;

  return (
    <Link className="card-link" to={`/details/${id}`} onClick={handleClick}>
      <div className="hero-element">
        <div className="card-container" id={id}>
          <img className="hero-image" src={image} alt={name} />
          <div className="card card-title">{name}</div>
          <img className="stamp" src={stamp} alt="stamp" />
          <div className="card card-publisher">{biography.publisher}</div>
          <div className="card card-description">
            {`This character name is ${biography['full-name']} born in ${biography['place-of-birth']}
            `}
          </div>
        </div>
      </div>
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentHero: superhero => {
    dispatch(setCurrentHero(superhero));
  },
});

SuperheroCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  superhero: PropTypes.objectOf(PropTypes.any).isRequired,
  setCurrentHero: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SuperheroCard);
