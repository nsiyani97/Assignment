import { useEffect, useState } from "react";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";
import { db } from "./firebase";

function FirebaseCrud() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: "", age: "", email: "" });
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const usersRef = collection(db, "users");


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const snapshot = await getDocs(usersRef);
                setUsers(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            if (editId) {
                await updateDoc(doc(db, "users", editId), {
                    name: form.name,
                    age: Number(form.age),
                    email: form.email
                });
                setEditId(null);
            } else {
                await addDoc(usersRef, {
                    name: form.name,
                    age: Number(form.age),
                    email: form.email
                });
            }

            setForm({ name: "", age: "", email: "" });
            refreshUsers();
        } catch {
            setError("Failed to save user");
        }
    };


    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
            refreshUsers();
        } catch {
            setError("Failed to delete user");
        }
    };


    const handleEdit = (user) => {
        setEditId(user.id);
        setForm({
            name: user.name,
            age: user.age,
            email: user.email
        });
    };


    const refreshUsers = async () => {
        const snapshot = await getDocs(usersRef);
        setUsers(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    };


    if (loading) return <p>Loading users...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Firebase CRUD</h2>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <button type="submit">
                    {editId ? "Update" : "Add"}
                </button>
            </form>

            <ul>
                {users.map((u) => (
                    <li key={u.id}>
                        {u.name} | {u.age} | {u.email}
                        <button onClick={() => handleEdit(u)}>Edit</button>
                        <button onClick={() => handleDelete(u.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FirebaseCrud;
