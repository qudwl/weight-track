import React from 'react';

import Check from '../icons/check.svg';

const Record = () => {
  return (
    <>
      <h1>Add Record</h1>
      <div className="largeBox recordBox">
        <h3>You&apos;re</h3>
        <h1>+5kgs</h1>
        <h3>heaiver today.</h3>
      </div>
      <div className="recordInputs">
        <h2>Today&apos;s Weight</h2>
        <input type="number" className="inputWeight" />
        <button type="button" className="inputButton">
          <img src={Check} alt="" />
        </button>
      </div>
    </>
  );
};

export default Record;
