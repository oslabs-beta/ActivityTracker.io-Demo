import './App.css';
import HeatButton from './HeatButton';


// import useClickTracker from './UseClickTracker'; 
import useClickTracker from 'os-analytics'


function App() {

const apiKey = process.env.REACT_APP_API_KEY
//exact website link!
const webiste = 'test1.com'

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
