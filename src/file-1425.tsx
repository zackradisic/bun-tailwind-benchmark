import "./style.css";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">User List</h1>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="py-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-800">{user.name}</span>
                <span className="text-gray-600">{user.email}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
