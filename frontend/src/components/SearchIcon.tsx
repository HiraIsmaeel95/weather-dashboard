import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchIcon: React.FC = () => {
  return <FontAwesomeIcon icon={faSearch} className="search-icon" />;
};

export default SearchIcon;
