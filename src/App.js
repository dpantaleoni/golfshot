
import './App.css';
import ShotTracker from './Components/ShotTracker';
import ShotList from './Components/ShotList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GolfShot</h1>
        <ShotTracker />
        <ShotList />
      </header>
    </div>
  );
}

export default App;
