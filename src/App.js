import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AmplifySighOut />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Sample app</h1>
      <p>This is an app created from the sample.</p>
    </div>
  );
}

export default App;
