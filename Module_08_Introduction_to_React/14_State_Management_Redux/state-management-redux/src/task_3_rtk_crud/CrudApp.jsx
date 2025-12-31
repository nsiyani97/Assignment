import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, updateItem } from "./crudSlice";
import { useState } from "react";

export default function CrudApp() {
  const items = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (editId === null) {
      dispatch(addItem({ id: Date.now(), text }));
    } else {
      dispatch(updateItem({ id: editId, text }));
      setEditId(null);
    }
    setText("");
  };

  const handleEdit = (item) => {
    setText(item.text);
    setEditId(item.id);
  };

  return (
    <>
      <h2>Redux Toolkit CRUD</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter item" />

      <button onClick={handleSubmit}>{editId === null ? "Add" : "Update"}</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
            <button onClick={() => handleEdit(item)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}
