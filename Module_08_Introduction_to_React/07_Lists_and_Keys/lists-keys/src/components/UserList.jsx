function UserList() {
  const users = [
    { id: 1, name: "Nikhil" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Riya" },
  ];

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
