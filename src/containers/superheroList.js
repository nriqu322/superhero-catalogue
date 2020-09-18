import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getSuperhero from '../services/superheroApi';
import { filterSuperhero } from '../actions';
import SuperheroCard from '../components/superhero';

// const SuperheroList = props => {
//   const { filterSuperhero } = props;
//   const [superheroes, setSuperheroes] = useState([]);

//   useEffect(() => {
//     if (superheroes.length === 0) {
//       getSuperhero('spider').then(response => {
//         filterSuperhero(response);
//         setSuperheroes(response);
//         console.log(response);
//       });
//     }
//   });

//   return (
//     <>
//       <div className="superhero-list">
//         {
//           superheroes.map(superhero => (
//             <SuperheroCard
//               key={superhero.id}
//               id={superhero.id}
//               name={superhero.name}
//               image={superhero.image.url}
//             />
//           ))
//         }
//       </div>
//     </>
//   );
// };

class SuperheroList extends React.Component {
  componentDidMount() {
    const { filterSuperhero, superheroes } = this.props;

    if (superheroes.length === 0) {
      getSuperhero('hulk').then(response => {
        if (response) {
          filterSuperhero(response);
          console.log(response);
        }
      });
    }
  }

  render() {
    const { superheroes } = this.props;

    return (
      <div className="superhero-list">
        {
        superheroes.map(superhero => (
          <SuperheroCard
            key={superhero.id}
            id={superhero.id}
            name={superhero.name}
            image={superhero.image.url}
          />
        ))
        }
      </div>
    );
  }
}

SuperheroList.propTypes = {
  filterSuperhero: PropTypes.func.isRequired,
  superheroes: PropTypes.arrayOf(PropTypes.object),
};

SuperheroList.defaultProps = {
  superheroes: [],
};

const mapStateToProps = state => ({
  superheroes: state.superheroes,
});

const mapDispatchToProps = dispatch => ({
  filterSuperhero: superheroes => {
    dispatch(filterSuperhero(superheroes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroList);
