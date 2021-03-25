import React from 'react';
import { Record } from './icons/icons';
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
          <img src={Record} alt="record" width="80" color="#fca311" />
        </div>
        <div className="button" />
      </div>
    </div>
  );
}

export default App;
