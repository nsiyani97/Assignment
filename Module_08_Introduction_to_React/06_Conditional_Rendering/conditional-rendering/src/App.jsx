import LoginStatus from "./components/LoginStatus";
import VotingStatus from "./components/VotingStatus";

function App() {
  return (
    <div>
      <h2>Conditional Rendering Example</h2>
      <LoginStatus />
      <VotingStatus age={prompt("What is your age?")} />
    </div>
  );
}

export default App;
