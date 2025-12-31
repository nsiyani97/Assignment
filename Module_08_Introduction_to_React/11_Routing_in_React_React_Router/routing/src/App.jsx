import TaskOneRouter from "./task_1/TaskOneRouter";
import TaskTwoRouter from "./task_2/TaskTwoRouter";

function App() {
  return (
    <div>
      <h2>Task 1 Output</h2>
      <TaskOneRouter />

      <hr />

      <h2>Task 2 Output</h2>
      <TaskTwoRouter />
    </div>
  );
}

export default App;
