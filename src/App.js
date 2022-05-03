import logo from './logo.svg';
import './App.css';
import Landing from './landing';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Landing />
      </header>
    </div>
  );
}

export default App;
