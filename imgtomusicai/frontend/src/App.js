import logo from './logo.svg';
import './App.css';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>Image to Lyrics Generator</h1>
      </header>
       <header className="App-header-2">
      <ImageUpload />
      </header>
    </div>
  );
}

export default App;
