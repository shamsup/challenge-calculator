import React, { useCallback, useState } from 'react';
import calculate from './calculate';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const input = e.target.elements.numbers.value;
    try {
      setResult(calculate(input));
      setError(null);
    } catch (e) {
      setResult(null);
      setError(e.message);
    }
  }, []);

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit}>
        <input name="numbers" />
        <button type="submit">Add</button>
      </form>
      {
        error != null
          ? <div className="calculator-error">{error}</div>
          : null
      }
      {
        result != null
          ? <div className="calculator-result">{result}</div>
          : null
      }
    </div>
  );
};

export default Calculator;
