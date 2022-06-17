import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '../assets/search-icon.svg';

export default function Search(props) {
  const { defaultValue = '' } = props;

  return (
    <div className="input flex items-center round border shadow">
      <img className="icon" src={SearchIcon} alt="Search Icon" />
      <span className="inline-block ml-p5">
        <input type="text" placeholder="Search" defaultValue={defaultValue} />
      </span>
    </div>
  );
}

Search.propTypes = {
  defaultValue: PropTypes.string,
}
