import { ThemeProvider } from "./task_1/ThemeContext";
import ThemeToggle from "./task_1/ThemeToggle";
import ThemeDisplay from "./task_1/ThemeDisplay";

import { AuthProvider } from "./task_2/AuthContext";
import AuthComponent from "./task_2/AuthComponent";

function App() {
  return (
    <ThemeProvider>
      <h2>Task 1: Theme Toggle</h2>
      <ThemeToggle />
      <ThemeDisplay />

      <hr />

      <AuthProvider>
        <h2>Task 2: Authentication</h2>
        <AuthComponent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
