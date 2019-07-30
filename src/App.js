import React from 'react';
import logo from './logo-c.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="mailto:info@blindedbythelightstudios.com?subject=Blinded by the Light Inquiry"
          target="_blank"
          rel="noopener noreferrer"
        >  
          Email Us
        </a>  
      </header>
    </div>
  );
}

export default App;
