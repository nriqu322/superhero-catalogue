import React from 'react';
import PropTypes from 'prop-types';

const SuperheroCard = props => {
  const {
    id, name, image,
  } = props;

  return (
    <div className="hero-element">
      <div className="card-container" id={id}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
      </div>
    </div>
  );
};

SuperheroCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SuperheroCard;
