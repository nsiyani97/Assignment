import React from "react";
import Greeting from "./components/FunctionalComponent";
import WelcomeMessage from "./components/ClassComponent";

function App() {
  return (
    <div>
      <Greeting name="Nikhil" />
      <WelcomeMessage />
    </div>
  );
}

export default App;
