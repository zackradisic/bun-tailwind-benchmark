import "./style.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">User List</h1>
      <ul className="bg-white shadow-md rounded-lg max-w-md w-full">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="p-4 border-b border-gray-200 last:border-b-0">
              <h2 className="text-xl font-semibold text-gray-700">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
