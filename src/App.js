import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Calculator</h1>
      </header>
      <main>
        <p>Enter numbers separated by commas (,) or on separate lines, then hit Add</p>
        <Calculator />
        <p>Note: no negative numbers are allowed, and numbers over 1000 will be ignored.</p>
      </main>
    </div>
  );
}

export default App;
