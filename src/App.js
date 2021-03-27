import React, { useState } from 'react';

import Modal from './component/Modal';
import Home from './component/Home';
import Record from './component/Record';
import Calendar from './component/Calendar';

import './App.css';
import './animations.css';

const App = () => {
  const [showRecord, setShowRecord] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="App">
      <Home
        visible={showRecord || showCalendar}
        showRecord={() => setShowRecord(!showRecord)}
        showCalendar={() => setShowCalendar(!showCalendar)}
      />
      <Modal
        visible={showRecord}
        show={() => setShowRecord(!showRecord)}
        Comp={Record}
      />
      <Modal
        visible={showCalendar}
        show={() => setShowCalendar(!showCalendar)}
        Comp={Calendar}
      />
    </div>
  );
};

export default App;
