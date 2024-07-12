import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

const App = () => {
  const [counters, setCounters] = useState([0, 0, 0]);

  const incrementAll = () => {
    setCounters(counters.map(count => count + 1));
  };

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const incrementCounter = (index) => {
    setCounters(counters.map((count, i) => (i === index ? count + 1 : count)));
  };

  return (
    <div className="app">
      <button className="incrementAll" onClick={incrementAll}>All +1</button>
      {counters.map((count, index) => (
        <Counter
          key={index}
          count={count}
          increment={() => incrementCounter(index)}
        />
      ))}
      <button className="addCounter" onClick={addCounter}>Add a Counter</button>
    </div>
  );
};

export default App;
