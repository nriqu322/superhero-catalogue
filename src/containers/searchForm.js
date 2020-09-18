import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterSuperhero } from '../actions';
import getSuperhero from '../services/superheroApi';

// const SuperheroForm = props => {
//   const [superhero, setSuperhero] = useState('');
//   const { filterSuperhero } = props;

//   const handleSubmit = event => {
//     event.preventDefault();
//     // const { filterSuperhero } = props;

//     if (superhero.name !== '') {
//       getSuperhero(superhero.name).then(response => {
//         if (response) {
//           filterSuperhero(response);
//           console.log(response);
//         }
//       });
//     }
//     console.log(superhero.name);
//     // setSuperhero({ name: '' });
//   };

//   const handleChange = event => {
//     event.preventDefault();
//     setSuperhero({ [event.target.name]: event.target.value });
//   };

//   return (
//     <form id="superhero-form" onSubmit={handleSubmit}>
//       <input name="name" type="text" placeholder="Superhero name" onChange={handleChange} />
//       <button type="submit">SEARCH</button>
//     </form>
//   );
// };

class SuperheroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const { filterSuperhero } = this.props;

    if (name === '') return;
    getSuperhero(name).then(response => {
      if (response) {
        filterSuperhero(response);
        console.log(response);
      }
    });
    this.setState({ name: '' });
    console.log(name);
  }

  render() {
    const { name } = this.state;

    return (
      <form id="superhero-form" onSubmit={this.handleSubmit}>
        <input name="name" value={name} type="text" placeholder="Superhero name" onChange={this.handleChange} />
        <button type="submit">SEARCH</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  filterSuperhero: superheroes => {
    dispatch(filterSuperhero(superheroes));
  },
});

SuperheroForm.propTypes = {
  filterSuperhero: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SuperheroForm);
