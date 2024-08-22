
import { useEffect, useState } from 'react';
import './App.css';
import HeatButton from './HeatButton';

function App() {
  const [buttons, setButtons] = useState([])
  //Assign a dataset.activty id to every button element
  function assignIds() {
      const everything = document.querySelectorAll("button");
      let count = 0
      for (const el of everything) {
        el.dataset.activty = count;
        count++;
      }
      setButtons(everything)
      ;
  }

  function handleLogin() {
    console.log(buttons);
  }

  useEffect(()=> {
    assignIds();
  },[])

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
