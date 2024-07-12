import React from 'react';

const Counter = ({ count, increment }) => {
  return (
    <div className="counter">
      <button className="incrementBtn" onClick={increment}>+ 1</button>
      <div className="count">{count}</div>
    </div>
  );
};

export default Counter;
