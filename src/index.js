import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Reg  from './Register'


//replace the app with the reg to execute the register page with making changes on app page
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
   <Reg />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

