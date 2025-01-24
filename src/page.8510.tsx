// App.tsx
import React, { useEffect, useState } from 'react';

const fetchUsers = async () => {
  const response = await fetch('/api/users');
  return response.json();
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App: React.FC = () => (
  <div className="flex justify-center items-center min-h-screen bg-blue-50">
    <UserList />
  </div>
);

export default App;
