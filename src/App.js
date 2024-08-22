
import { useEffect, useState } from 'react';
import './App.css';
import HeatButton from './HeatButton';

import useClickTracker from './UseClickTracker'; 

function App() {

const apiKey = 'c14b15d0-50f1-70a8-8c72-cb7d3d1188ea'
useClickTracker(apiKey);

  function handleLogin() {
    console.log('buttons');
  }


  return (
    <div className="app">
      <h1>Activty Tracker Demo</h1>
      <div className="button-row">
        <HeatButton name="Button 1" />
        <HeatButton name="Button 2" />
        <HeatButton name="Button 3" />
      </div>
      <button className="btn" id="login" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
}

export default App;
