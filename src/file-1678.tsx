// MyComponent.tsx
import React, { useEffect, useState } from 'react';

const MyComponent: React.FC = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md">
        <ul className="list-none">
          {users.map((user) => (
            <li key={user.id} className="py-2 px-3 border-b border-gray-200">
              <span className="text-lg font-semibold">{user.name}</span> -{' '}
              <span className="text-gray-600">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
