import React, { useState, useEffect } from 'react';
import { XYPlot, LineSeries } from 'react-vis';

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

const Home = () => {
  const [dataNum, setDataNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDataNum(1);
    }, 1000);
  });

  return (
    <>
      <h1>Weight Tracker</h1>
      <div className="largeBox chart">
        <p>68.9kgs</p>
        <XYPlot width={350} height={200}>
          <LineSeries
            data={data[dataNum]}
            strokeWidth={8}
            color="white"
            animation
            curve="curveMonotoneX"
          />
        </XYPlot>
      </div>
      <div className="buttonRow">
        <div className="button">
          <img src={Record} alt="record" width="80" />
          <h3>Record</h3>
        </div>
        <div className="button">
          <img src={CalendarWhite} alt="calendar" width="80" />
          <h3>Calendar</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
