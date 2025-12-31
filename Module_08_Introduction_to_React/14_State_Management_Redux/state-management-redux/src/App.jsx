import Counter from "./task_1_redux_counter/Counter";
import TodoApp from "./task_2_recoil_todo/TodoApp";
import CrudApp from "./task_3_rtk_crud/CrudApp";

export default function App() {
  return (
    <>
      <Counter />
      <hr />
      <TodoApp />
      <hr />
      <CrudApp />
    </>
  );
}
