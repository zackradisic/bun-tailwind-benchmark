import "./style.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {users.map(user => (
            <li key={user.id} className="px-6 py-4 flex justify-between">
              <span className="text-gray-800">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
