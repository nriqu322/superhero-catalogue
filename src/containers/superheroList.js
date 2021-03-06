import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getSuperhero from '../services/superheroApi';
import { filterPublisher, filterSuperhero } from '../actions';
import SuperheroCard from '../components/superhero';
import PublisherFilter from '../components/publisherFilter';

class SuperheroList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterPublisher = this.handleFilterPublisher.bind(this);
  }

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

  handleFilterPublisher(e) {
    const { filterPublisher } = this.props;
    filterPublisher(e.target.value);
  }

  render() {
    const { superheroes, publisher } = this.props;
    const publishers = [];
    superheroes.map(superhero => (!publishers.includes(superhero.biography.publisher))
      && publishers.push(superhero.biography.publisher));
    const filterByPublisher = superheroes.filter(superhero => superhero.biography.publisher === publisher || publisher === 'All');

    return (
      <>
        <div className="publisher-container">
          <div>Publisher Filter:</div>
          <PublisherFilter
            publisherList={publishers}
            filterPublisher={this.handleFilterPublisher}
          />
        </div>
        <div className="superhero-list">
          {
          filterByPublisher
            .map((superhero, index) => (
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
      </>
    );
  }
}

SuperheroList.propTypes = {
  filterSuperhero: PropTypes.func.isRequired,
  superheroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterPublisher: PropTypes.func.isRequired,
  publisher: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  superheroes: state.superheroes.superheroes,
  publisher: state.publisher,
});

const mapDispatchToProps = dispatch => ({
  filterSuperhero: superheroes => {
    dispatch(filterSuperhero(superheroes));
  },
  filterPublisher: publisher => {
    dispatch(filterPublisher(publisher));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroList);
