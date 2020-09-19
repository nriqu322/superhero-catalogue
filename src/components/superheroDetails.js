import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getSuperheroId } from '../services/superheroApi';
// import { filterSuperhero } from '../actions';

const SuperheroDetails = props => {
  const { superheroes, match } = props;
  const { id } = match.params;
  const currentHero = superheroes[id];

  // useEffect(() => {
  //   getSuperheroId(id).then(response => {
  //     if (response) {
  //       filterSuperhero([response]);
  //       console.log(response);
  //     }
  //   });
  // });
  console.log(currentHero.appearance);
  return (
    <div className="superhero-details">
      { currentHero.name }
    </div>
  );
};

// class SuperheroDetails extends React.Component {
//   componentDidMount() {
//     const { filterSuperhero, match } = this.props;
//     const { id } = match.params;

//     getSuperheroId(id).then(response => {
//       if (response) {
//         filterSuperhero(response);
//         console.log(response);
//       }
//     });
//   }

//   render() {
//     const { superheroes } = this.props;

//     return (
//       <div className="superhero-details">
//         { superheroes.name }
//       </div>
//     );
//   }
// }

SuperheroDetails.propTypes = {
  superheroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  superheroes: state.superheroes,
  currentHero: state.currentHero,
});

// const mapDispatchToProps = dispatch => ({
//   filterSuperhero: superheroes => {
//     dispatch(filterSuperhero(superheroes));
//   },
// });

export default connect(mapStateToProps)(SuperheroDetails);
