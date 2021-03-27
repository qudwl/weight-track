import React from 'react';
import PropTypes from 'prop-types';

import Check from '../icons/check.svg';

const Calendar = ({ show }) => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Calendar</h2>
      <div className="largeBox calendarBox">
        <div className="dateBox">
          <h3>June 4th, 2021</h3>
        </div>
        <div className="dateRow">
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
        </div>
        <div className="dateRow">
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
        </div>
        <div className="dateRow">
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
        </div>
        <div className="dateRow">
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
          <div className="date">
            <h5>1</h5>
            <p>70.1</p>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="statBox">
          <h6>Highest</h6>
          <p>96.0</p>
        </div>
        <div className="statBox">
          <h6>Lowest</h6>
          <p>96.0</p>
        </div>
        <div className="statBox">
          <h6>Average</h6>
          <p>96.0</p>
        </div>
      </div>
      <div className="close">
        <button type="button" onClick={show} className="inputButton">
          <img src={Check} alt="close" />
        </button>
      </div>
    </>
  );
};

Calendar.propTypes = {
  show: PropTypes.func,
};

Calendar.defaultProps = {
  show: () => {},
};

export default Calendar;
