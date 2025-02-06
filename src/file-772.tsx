import "./style.css";
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <ul className="divide-y divide-gray-200">
          {users.map(user => (
            <li key={user.id} className="py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">{user.name}</span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
        {users.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
