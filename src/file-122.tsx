import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">User List</h1>
      <ul className="bg-white shadow-lg rounded-lg w-full max-w-md p-4 space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <span className="text-lg font-medium text-gray-700">{user.name}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={fetchUsers}
        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors"
      >
        Refresh User List
      </button>
    </div>
  );
};

export default App;
