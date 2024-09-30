import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button clicks
  const handleClick = (value) => {
    if (result) {
      setResult('');
      setInput(value); // If result is displayed, start a new input
    } else {
      setInput((prev) => prev + value);
    }
  };

  // Clear the input
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Calculate the result
  const calculate = () => {
    try {
      // Use mathjs for evaluation
      const evaluatedResult = evaluate(input);
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <h1>Scientific Calculator</h1>
      <div className="calculator">
        <div className="display">
          {/* Conditionally render input field if there's no result */}
          {!result && <input type="text" value={input} readOnly />}
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {/* Numbers and basic operators */}4
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={calculate}>=</button>
          <button onClick={handleClear}>C</button>

          {/* Scientific operators */}
          <button onClick={() => handleClick('Math.PI')}>π</button>
          <button onClick={() => handleClick('Math.E')}>e</button>
          <button onClick={() => handleClick('sin(')}>sin</button>
          <button onClick={() => handleClick('cos(')}>cos</button>
          <button onClick={() => handleClick('tan(')}>tan</button>
          <button onClick={() => handleClick('log(')}>log</button>
          <button onClick={() => handleClick('sqrt(')}>√</button>
          <button onClick={() => handleClick('exp(')}>exp</button>

          {/* Advanced Functions */}
          <button onClick={() => handleClick('ln(')}>ln</button>
          <button onClick={() => handleClick('pow(')}>x^y</button>
          <button onClick={() => handleClick('factorial(')}>n!</button>
          <button onClick={() => handleClick('mean(')}>mean</button>
          <button onClick={() => handleClick('median(')}>median</button>
          <button onClick={() => handleClick('mode(')}>mode</button>
          <button onClick={() => handleClick('sum(')}>Σ</button>
          <button onClick={() => handleClick('permutation(')}>nPr</button>
          <button onClick={() => handleClick('combination(')}>nCr</button>
        </div>
      </div>
    </div>
  );
}

export default App;
