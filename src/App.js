import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleAdd = async () => {
    const response = await fetch('http://localhost:5000/api/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1: parseFloat(num1), num2: parseFloat(num2) }),
    });
    const data = await response.json();
    setResult(data.result);
    setHistory(data.history);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Add Two Numbers</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <h2>Result: {result}</h2>
      <h3>History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.num1} + {item.num2} = {item.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
