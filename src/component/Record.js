import React from 'react';
import PropTypes from 'prop-types';

import Check from '../icons/check.svg';

const Record = ({ show }) => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Add Record</h2>
      <div className="largeBox recordBox">
        <h3>You&apos;re</h3>
        <div>
          <span style={{ fontSize: '4em', fontWeight: 'bold' }}>0</span>
          <span>kg</span>
        </div>
        <h3>from yesterday.</h3>
      </div>
      <div className="recordInputs">
        <h2>Today&apos;s Weight</h2>
        <input type="text" className="inputWeight" inputMode="numeric" />

        <button type="button" onClick={show} className="inputButton">
          <img src={Check} alt="" />
        </button>
      </div>
    </>
  );
};

Record.propTypes = {
  show: PropTypes.func,
};

Record.defaultProps = {
  show: () => {},
};

export default Record;
