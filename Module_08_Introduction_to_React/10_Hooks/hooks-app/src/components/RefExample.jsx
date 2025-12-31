import React, { useRef, useState } from "react";

function RefExample() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current++;

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Component Rendered: {renderCount.current} times</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default RefExample;
