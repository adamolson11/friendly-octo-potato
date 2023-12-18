// App.jsx (or App.js)

import React from 'react';
import './App.css';
import './styles.css'; // Include your global styles

function App() {
  return (
    <div className="app-container">
      <div className="left-panel">
        <h1>Your Improvement App</h1>
        <p>
          Unlock your full potential and achieve your goals with our personalized improvement app.
        </p>
      </div>
      <div className="right-panel">
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}

export default App;

