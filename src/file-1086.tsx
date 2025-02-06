import "./style.css";
import React, { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">User List</h1>
      <ul className="list-none space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-4 bg-white shadow rounded-md hover:bg-gray-200 transition">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-700">{user.email}</p>
          </li>
        ))}
      </ul>
      <footer className="absolute bottom-0 p-4 text-center w-full bg-blue-500 text-white">
        <p className="text-sm">Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
