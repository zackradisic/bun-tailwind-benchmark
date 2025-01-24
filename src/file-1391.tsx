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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">User List</h1>
      <ul className="max-w-md w-full bg-white shadow-lg rounded-lg">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-4 border-b-2 border-gray-200">
              <span className="font-semibold text-lg">{user.name}</span>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">Loading users...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
