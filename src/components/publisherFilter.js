import React from 'react';
import PropTypes from 'prop-types';

const PublisherFilter = props => {
  const { publisherList, filterPublisher } = props;

  const handlePublisherFilter = filter => {
    filterPublisher(filter);
  };

  return (
    <select name="publisher" className="publisher-filter" onChange={handlePublisherFilter}>
      <option key="All">All</option>
      {publisherList.map((publisher, index) => (
        <option key={publisher[index]}>{publisher}</option>
      ))}
    </select>
  );
};

PublisherFilter.propTypes = {
  filterPublisher: PropTypes.func.isRequired,
  publisherList: PropTypes.instanceOf(Array).isRequired,
};

export default PublisherFilter;
