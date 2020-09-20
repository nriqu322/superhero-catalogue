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

      <div className="container-appearance">
        <h2>Appearance</h2>
        <div className="hero-appearance">
          <h4>Gender</h4>
          <p>{currentHero.appearance.gender}</p>
          <h4>Eye Color</h4>
          <p>{currentHero.appearance['eye-color']}</p>
          <h4>Hair Color</h4>
          <p>{currentHero.appearance['hair-color']}</p>
          <h4>Race</h4>
          <p>{currentHero.appearance.race}</p>
          <h4>Height</h4>
          <p>{`${currentHero.appearance.height[0]} / ${currentHero.appearance.height[1]}`}</p>
          <h4>Weight</h4>
          <p>{`${currentHero.appearance.weight[0]} / ${currentHero.appearance.weight[1]}`}</p>
        </div>
      </div>
      <div>
        <h2>Power Stats</h2>
        <div className="hero-power">
          <h4>Combat</h4>
          <p>{currentHero.powerstats.combat}</p>
          <h4>Durability</h4>
          <p>{currentHero.powerstats.durability}</p>
          <h4>Intelligence</h4>
          <p>{currentHero.powerstats.intelligence}</p>
          <h4>Power</h4>
          <p>{currentHero.powerstats.power}</p>
          <h4>Speed</h4>
          <p>{currentHero.powerstats.speed}</p>
          <h4>Strength</h4>
          <p>{currentHero.powerstats.strength}</p>
        </div>
      </div>

      <div className="container-connections">
        <h2>Connections</h2>
        <div className="hero-connections">
          <h4>Group Affiliation</h4>
          <p>{currentHero.connections['group-affiliation']}</p>
          <h4>Relatives</h4>
          <p>{currentHero.connections.relatives}</p>
        </div>
      </div>
      <div className="container-work">
        <h2>Work</h2>
        <div className="hero-work">
          <h4>Base</h4>
          <p>{currentHero.work.base}</p>
          <h4>Occupation</h4>
          <p>{currentHero.work.occupation}</p>
        </div>
      </div>
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
