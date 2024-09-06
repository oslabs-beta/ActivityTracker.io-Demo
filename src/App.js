
import { useEffect, useState } from 'react';
import './App.css';
import HeatButton from './HeatButton';

import useClickTracker from './UseClickTracker'; 

function App() {

const apiKey = '49b5a33b-5c40-4a16-a33e-9dc5dcca29e2' //dummy data api key
//exact website link!
const webiste = 'test12.com'

useClickTracker(apiKey, webiste);

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
