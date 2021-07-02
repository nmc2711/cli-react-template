import React, { useState } from 'react';
import './count.scss';

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>카운트</h2>
      <button onClick={() => setCount((c) => c + 1)}> 카운트 : {count}</button>
    </div>
  );
};
