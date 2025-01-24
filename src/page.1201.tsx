import { FC, useEffect, useState } from 'react';

const App: FC = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">User List</h1>
      <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="flex justify-between items-center border-b py-2">
              <span className="text-lg text-gray-700">{user.name}</span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
