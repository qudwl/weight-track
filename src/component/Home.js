import React, { useState, useEffect } from 'react';
import { XYPlot, LineSeries } from 'react-vis';
import PropTypes from 'prop-types';

import Record from '../icons/record.svg';
import CalendarWhite from '../icons/calendarWhite.svg';

import '../../node_modules/react-vis/dist/style.css';

const data = [
  { x: 0, y: 9 },
  { x: 1, y: 8.5 },
  { x: 2, y: 8 },
  { x: 3, y: 7.5 },
  { x: 4, y: 7 },
  { x: 5, y: 7 },
  { x: 6, y: 8 },
  { x: 7, y: 6.5 },
  { x: 8, y: 6 },
  { x: 9, y: 5 },
];

const Home = ({ visible, showRecord, showCalendar, curWeight }) => {
  const [classes, setClasses] = useState('page');
  useEffect(() => {
    if (visible) {
      setClasses('page page-modal-in');
    } else if (classes !== 'page') {
      setClasses('page page-model-out');
    } else {
      setClasses('page');
    }
  });

  return (
    <div className={classes}>
      <h1>Weight Tracker</h1>
      <div className="largeBox chart">
        <p>{curWeight === 0 ? `${curWeight}kgs` : 'Enter a weight'}</p>
        <XYPlot width={350} height={200}>
          <LineSeries
            data={data}
            strokeWidth={8}
            color="white"
            animation
            curve="curveMonotoneX"
          />
        </XYPlot>
      </div>
      <div className="buttonRow">
        <div
          role="button"
          className="button"
          onClick={showRecord}
          tabIndex={0}
          onKeyDown={event => {
            // eslint-disable-next-line
            console.log(event);
          }}
        >
          <img src={Record} alt="record" width="80" />
          <h3>Record</h3>
        </div>
        <div
          className="button"
          role="button"
          onClick={showCalendar}
          tabIndex={0}
          onKeyDown={event => {
            // eslint-disable-next-line
            console.log(event);
          }}
        >
          <img src={CalendarWhite} alt="calendar" width="80" />
          <h3>Calendar</h3>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  showRecord: PropTypes.func,
  showCalendar: PropTypes.func,
  visible: PropTypes.bool,
  curWeight: PropTypes.number,
};
Home.defaultProps = {
  showRecord: () => {},
  showCalendar: () => {},
  visible: false,
  curWeight: 0,
};

export default Home;
