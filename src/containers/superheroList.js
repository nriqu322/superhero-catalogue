import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getSuperhero from '../services/superheroApi';
// import Superhero from '../components/superhero';
import { filterSuperhero } from '../actions';

// const SuperheroList = props => {
//   // const [superheroList, setSuperheroList] = useState([]);

//   const { filterSuperhero, superheroResult } = props;

//   useEffect(() => {
//     if (superheroResult.length === 0) {
//       const superheroes = [];
//       getSuperhero('spider').then(response => superheroes.push(response));
//       filterSuperhero(superheroes);
//       console.log(superheroes);
//       console.log(superheroResult);
//     }
//   }); // remove the empty array to update every time it changes

//   return (
//     <>
//       <div className="superhero-list">
//         {/* {
//         superheroResult.map(superhero => (
//           <Superhero key={superhero.id} superhero={superhero} />
//         ))
//         } */}
//         {superheroResult}
//       </div>
//     </>
//   );
// };

class SuperheroList extends React.Component {
  componentDidMount() {
    const { filterSuperhero, superheroResult } = this.props;

    if (superheroResult.length === 0) {
      const superheroes = [];
      getSuperhero('spider').then(response => superheroes.push(response));
      filterSuperhero(superheroes);
      console.log(superheroes);
      console.log(superheroResult);
    }
  }

  render() {
    const { superheroResult } = this.props;
    return (
      <div className="superhero-list">
        {superheroResult}
      </div>
    );
  }
}

SuperheroList.propTypes = {
  filterSuperhero: PropTypes.func.isRequired,
  superheroResult: PropTypes.instanceOf(Object),
};

SuperheroList.defaultProps = {
  superheroResult: [],
};

const mapStateToProps = state => ({
  superheroResult: state.superhero.superheroResult,
});

const mapDispatchToProps = dispatch => ({
  filterSuperhero: superheroes => {
    dispatch(filterSuperhero(superheroes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroList);
