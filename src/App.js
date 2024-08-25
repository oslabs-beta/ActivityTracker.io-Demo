
import { useEffect, useState } from 'react';
import './App.css';
import HeatButton from './HeatButton';

import useClickTracker from './UseClickTracker'; 

function App() {

const apiKey = '1fd30d5c-55b3-467b-98a2-2ff67dd522d2' //dummy data api key
//exact website link!
const webiste = 'testOne.com'

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
