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
        <p>Tip: You can use a custom delimiter by prefixing it with two slashes and placing numbers on the next line:</p>
        <pre><code>{'//#\n2#5'}</code></pre>
      </main>
    </div>
  );
}

export default App;
