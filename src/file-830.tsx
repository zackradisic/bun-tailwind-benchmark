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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="py-2 flex items-center justify-between">
              <span className="text-gray-800 font-medium">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))}
          {users.length === 0 && (
            <li className="py-2 text-gray-500 text-center">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
