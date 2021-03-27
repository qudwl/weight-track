import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Check from '../icons/check.svg';

const Record = ({ show }) => {
  const [newWeight, setNewWeight] = useState(0);

  const curWeight = localStorage.getItem('curWeight');
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Add Record</h2>
      <div className="largeBox recordBox">
        <h3>You&apos;re</h3>
        <div>
          <span style={{ fontSize: '4em', fontWeight: 'bold' }}>
            {Number.isNaN(parseFloat(newWeight, 10) - curWeight)
              ? 0
              : parseFloat(newWeight, 10) - curWeight}
          </span>
          <span>kg</span>
        </div>
        <h3>from yesterday.</h3>
      </div>
      <div className="recordInputs">
        <h2>Today&apos;s Weight</h2>
        <input
          type="text"
          className="inputWeight"
          inputMode="numeric"
          value={newWeight}
          onChange={event => setNewWeight(event.target.value)}
        />

        <button
          type="button"
          onClick={() => {
            // eslint-disable-next-line prefer-const
            let dates = JSON.parse(localStorage.getItem('dates'));
            if (
              dates[dates.length - 1] !== new Date().toISOString().slice(0, 10)
            ) {
              localStorage.setItem(
                'dates',
                JSON.stringify([
                  ...dates,
                  new Date().toISOString().slice(0, 10),
                ]),
              );
            }
            if (newWeight !== 0) {
              localStorage.setItem('curWeight', newWeight);
            }
            show(false);
          }}
          className="inputButton"
        >
          <img src={Check} alt="AddNew" />
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
