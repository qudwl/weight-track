import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Setting default values for localStorage API.
if (localStorage.getItem('dates') == null) {
  localStorage.setItem(
    'dates',
    JSON.stringify([new Date().toISOString().slice(0, 10)]),
  );
}
if (localStorage.getItem('weights') == null) {
  localStorage.setItem('weights', JSON.stringify([]));
}
if (localStorage.getItem('curWeight') == null) {
  localStorage.setItem('curWeight', 0);
}
if (localStorage.getItem('averageWeight') == null) {
  localStorage.setItem('averageWeight', 0);
}
if (localStorage.getItem('lowWeight') == null) {
  localStorage.setItem('lowWeight', 0);
}
if (localStorage.getItem('highWeight') == null) {
  localStorage.setItem('highWeight', 0);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
