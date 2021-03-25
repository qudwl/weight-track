import React from 'react';
import Record from './icons/record.svg';
import CalendarWhite from './icons/calendarWhite.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weight Tracker</h1>
      <div className="chart">
        <p>68.9kgs</p>
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
    </div>
  );
}

export default App;
