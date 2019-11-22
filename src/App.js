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
        <p>Enter numbers separated by commas (,) then hit Add</p>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
