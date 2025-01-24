import { useEffect, useState } from 'react';

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user.id} className="p-4 bg-gray-200 rounded-md shadow">
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Refresh Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
