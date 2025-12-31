import React from "react";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import ReduxCounter from "./components/ReduxCounter";
import RefExample from "./components/RefExample";

function App() {
  return (
    <div>
      <h1>React Hooks Lab Assignment</h1>

      <hr />
      <Counter />

      <hr />
      <FetchData />

      <hr />
      <ReduxCounter />

      <hr />
      <RefExample />
    </div>
  );
}

export default App;
