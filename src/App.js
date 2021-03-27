import React, { useEffect, useState } from 'react';

import Modal from './component/Modal';
import Home from './component/Home';
import Record from './component/Record';
import Calendar from './component/Calendar';

import './App.css';
import './animations.css';

const getCurWeight = () => {
  return localStorage.getItem('curWeight');
};

const App = () => {
  const [showRecord, setShowRecord] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [curWeight, setCurWeight] = useState(getCurWeight());

  useEffect(() => {
    setCurWeight(getCurWeight());
  });

  return (
    <div className="App">
      <Home
        visible={showRecord || showCalendar}
        showRecord={() => setShowRecord(!showRecord)}
        showCalendar={() => setShowCalendar(!showCalendar)}
        curWeight={curWeight}
      />
      <Modal visible={showRecord} show={setShowRecord} Comp={Record} />
      <Modal visible={showCalendar} show={setShowCalendar} Comp={Calendar} />
    </div>
  );
};

export default App;
