import logo from './logo.svg';
import './App.css';
import ImageUpload from './ImageUpload';
import MediaSection from './MediaSection';

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

        <header className="App-header-3">
        <h2 className='divider'>Gallery</h2>
        <h3 className='divider'>Room 540AA</h3>  
          <MediaSection imageUrl={'static/540AA.jpg'} videoUrl={'static/540AA.mp4'} />
        <h3 className='divider-2'>Jensen Huang</h3>
          <MediaSection imageUrl={'static/jensen.gif'} videoUrl={'static/jensen.mp4'} />
        </header>
      </header>
    </div>
  );
}

export default App;
