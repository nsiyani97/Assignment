import UserTable from "./task_1/UserTable";
import FirebaseAuth from "./task_2/FirebaseAuth";
import LoadingAndError from "./task_3/LoadingAndError";

function App() {
  return (
    <>
      <h2>Task 1: Fetch Users</h2>
      <UserTable />

      <hr />

      <h2>Task 2: Firebase Authentication</h2>
      <FirebaseAuth />

      <hr />

      <h2>Task 3: Loading & Error Handling</h2>
      <LoadingAndError />
    </>
  );
}

export default App;
