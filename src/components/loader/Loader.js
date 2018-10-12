import React from 'react';
import './Loader.scss';

/**
 * Loader component
*/
const Loader = () => (
  <div className="spinner">
    <div className="spinner__mask" />
    <div className="spinner__logo" />
  </div>
);

export default Loader;
