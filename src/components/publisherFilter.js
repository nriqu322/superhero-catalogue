import React from 'react';
import PropTypes from 'prop-types';
import { filterSuperhero } from '../actions';

const PublisherFilter = props => {
  const { publisherList } = props;

  const handlePublisherFilter = filter => {
    filterSuperhero(filter);
  };

  return (
    <select name="publisher" className="publisher-filter" onChange={handlePublisherFilter}>
      {publisherList.map(publisher => (
        <option key={publisher} value={publisher}>{publisher}</option>
      ))}
    </select>
  );
};

PublisherFilter.propTypes = {
  // changeFilter: PropTypes.func.isRequired,
  publisherList: PropTypes.instanceOf(Array).isRequired,
};

export default PublisherFilter;
