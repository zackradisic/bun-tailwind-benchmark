import "./style.css";
// src/App.tsx
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-5">User List</h1>
      <div className="border-2 border-gray-300 rounded-lg shadow-lg p-5">
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-3 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
