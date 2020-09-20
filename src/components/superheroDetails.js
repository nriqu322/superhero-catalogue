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
      <h1>Go Back</h1>
      <div className="container-bio">
        <h2>Biography</h2>
        <div className="hero-bio">
          <img src={currentHero.image.url} alt="hero" />
          <div className="hero-bio-text">
            <h4>Aliases</h4>
            {currentHero.biography.aliases.map(alias => (
              <span key={alias}>
                {alias}
                <span className="separator">|</span>
              </span>
            ))}
            <h4>Alignment</h4>
            <p>{currentHero.biography.alignment}</p>
            <h4>Alter-egos</h4>
            <p>{currentHero.biography['alter-egos']}</p>
            <h4>First Appearance</h4>
            <p>{currentHero.biography['first-appearance']}</p>
            <h4>Full Name</h4>
            <p>{currentHero.biography['full-name']}</p>
            <h4>Place of Birth</h4>
            <p>{currentHero.biography['place-of-birth']}</p>
            <h4>Publisher</h4>
            <p>{currentHero.biography.publisher}</p>
          </div>
        </div>
      </div>
      <hr />
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  // match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  superheroes: state.superheroes.superheroes,
  currentHero: state.superheroes.currentHero,
});

export default connect(mapStateToProps, null)(SuperheroDetails);
