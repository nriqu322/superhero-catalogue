import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getSuperhero from '../services/superheroApi';
import { filterSuperhero } from '../actions';
import SuperheroCard from '../components/superhero';

class SuperheroList extends React.Component {
  componentDidMount() {
    const { filterSuperhero, superheroes } = this.props;

    if (superheroes.length === 0) {
      getSuperhero('hulk').then(response => {
        if (response) {
          filterSuperhero(response);
        }
      });
    }
  }

  render() {
    const { superheroes } = this.props;
    console.log(superheroes);
    return (
      <div className="superhero-list">
        {
        superheroes.map((superhero, index) => (
          <SuperheroCard
            key={superhero.id}
            id={index}
            name={superhero.name}
            image={superhero.image.url}
            superhero={superhero}
          />
        ))
        }
      </div>
    );
  }
}

SuperheroList.propTypes = {
  filterSuperhero: PropTypes.func.isRequired,
  superheroes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  superheroes: state.superheroes.superheroes,
});

const mapDispatchToProps = dispatch => ({
  filterSuperhero: superheroes => {
    dispatch(filterSuperhero(superheroes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroList);
