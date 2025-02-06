import "./style.css";
// App.tsx
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-5xl font-bold text-white mb-4">User List</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
        <ul className="mt-4">
          {users.map((user) => (
            <li key={user.id} className="py-2 border-b border-gray-300">
              <span className="font-medium">{user.name}</span>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-10 text-white text-sm">
        <p>Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
