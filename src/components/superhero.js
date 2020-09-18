import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SuperheroCard = props => {
  const {
    id, name, image,
  } = props;

  return (
    <Link to="/details/:id">
      <div className="hero-element">
        <div className="card-container" id={id}>
          <img src={image} alt={name} />
          <h1>{name}</h1>
        </div>
      </div>
    </Link>
  );
};

SuperheroCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SuperheroCard;
