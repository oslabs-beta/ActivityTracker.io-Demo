
import './App.css';
import HeatButton from './HeatButton';

function App() {
  return (
    <div className="app">
      <h1>Activty Tracker Demo</h1>
      <div className="button-row">
        <HeatButton name="Button 1" />
        <HeatButton name="Button 2" />
        <HeatButton name="Button 3" />
      </div>
      <button className="btn" id="login">
        Login
      </button>
    </div>
  );
}

export default App;
