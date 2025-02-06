import "./style.css";
// src/App.tsx
import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-5 text-blue-600">User List</h1>
      <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full">
        {users.length === 0 ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition">
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-700">{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
