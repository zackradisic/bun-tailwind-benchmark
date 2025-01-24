// App.tsx
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <ul className="bg-white shadow-md rounded-md p-4">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="border-b last:border-b-0 py-2">
              <span className="text-gray-800">{user.name}</span> - <span className="text-gray-500">{user.email}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
