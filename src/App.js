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
        <h2>Tips:</h2>
        <p>You can use a custom delimiter by prefixing it with two slashes and placing numbers on the next line:</p>
        <pre><code>{'//#\n2#5'}</code></pre>
        <p>You can use a custom multi-character delimiter by using the format below:</p>
        <pre><code>{'//[***]\n11***22***33'}</code></pre>
        <p>You can also provide multiple delimiters by repeating the above format, like the following:</p>
        <pre><code>{'//[*][!!][r9r]\n11r9r22*33!!44'}</code></pre>
      </main>
    </div>
  );
}

export default App;
