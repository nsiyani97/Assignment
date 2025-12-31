import { useRecoilState } from "recoil";
import { todoListState } from "./todoAtoms";
import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos([...todos, { text, completed: false }]);
    setText("");
  };

  const toggleTodo = index => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const removeTodo = index => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>Recoil Todo List</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
              onClick={() => toggleTodo(i)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(i)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
