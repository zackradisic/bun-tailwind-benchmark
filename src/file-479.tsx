import "./style.css";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">User List</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        {users.length === 0 ? (
          <p className="text-gray-500">Loading users...</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="bg-blue-100 p-4 rounded-md shadow-md flex justify-between items-center">
                <span className="text-lg text-blue-800">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
