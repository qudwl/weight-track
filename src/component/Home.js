import React, { useState, useEffect } from 'react';
import { XYPlot, LineSeries } from 'react-vis';
import PropTypes from 'prop-types';

import Record from '../icons/record.svg';
import CalendarWhite from '../icons/calendarWhite.svg';

import '../../node_modules/react-vis/dist/style.css';

const data = [
  [
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
  ],
  [
    { x: 0, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 8 },
    { x: 3, y: 6 },
    { x: 4, y: 5 },
    { x: 5, y: 2 },
    { x: 6, y: 9 },
    { x: 7, y: 1 },
    { x: 8, y: 2 },
    { x: 9, y: 3 },
  ],
];

const Home = ({ visible, showRecord, showCalendar }) => {
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
        <p>68.9kgs</p>
        <XYPlot width={350} height={200}>
          <LineSeries
            data={data[0]}
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
};
Home.defaultProps = {
  showRecord: () => {},
  showCalendar: () => {},
  visible: false,
};

export default Home;
