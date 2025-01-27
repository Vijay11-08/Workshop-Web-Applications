import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AplhabatExcersize from './Excersize/Excersize1';
import ToDoList from './Excersize/Excersize2';
import ColorPicker from './Excersize/Excersize3';
import DarkMode from './Excersize/Excersize4';
import Pagination from './Excersize/Excersize5';
import SearchBar from './Excersize/Excersize6';
import DayNight from './Excersize/Excersize4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DayNight />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
