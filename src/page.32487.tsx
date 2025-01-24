import { useEffect, useState } from 'react';

// Tailwind CSS component to showcase Bun's server and client integration
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
      <h1 className="text-4xl font-bold text-blue-600 mb-8">User List</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {users.length ? (
            users.map((user) => (
              <li key={user.id} className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))
          ) : (
            <li className="text-gray-500">Loading users...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
