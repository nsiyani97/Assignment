import React from "react";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="container">
      <UserCard name="Nikhil" age="27" location="Ahmedabad" />
      <Counter />
    </div>
  );
}

export default App;
