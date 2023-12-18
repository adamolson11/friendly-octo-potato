// App.jsx (or App.js)

import React from 'react';
import './App.css';
import './styles.css'; // Replace with the path to your stylesheet

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Improvement App</h1>
        <p>
          Unlock your full potential and achieve your goals with our personalized improvement app.
        </p>
        <div className="cta-buttons">
          <button className="primary-cta">Get Started</button>
          <button className="secondary-cta">Learn More</button>
        </div>
      </header>
    </div>
  );
}

export default App;
