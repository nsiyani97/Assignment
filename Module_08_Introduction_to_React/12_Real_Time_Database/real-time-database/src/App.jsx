import UserTable from './task_1/UserTable'
import FirebaseCrud from './task_2/FirebaseCrud'
import LoadingAndError from './task_3/LoadingAndError'

function App() {
  return (
    <>
      <h2>Task 1: Fetch Users</h2>
      <UserTable />

      <hr />

      <h2>Task 2: Firebase</h2>
      <FirebaseCrud />

      <hr />

      <h2>Task 3: Loading & Error Handling</h2>
      <LoadingAndError />
    </>
  );
}

export default App;
