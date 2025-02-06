import "./style.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-8">User Dashboard</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Users List</h2>
        <ul className="list-disc list-inside">
          {users.map((user) => (
            <li key={user.id} className="text-gray-700">
              {user.name}
            </li>
          ))}
        </ul>
        {users.length === 0 && <p className="text-gray-500">No users found</p>}
      </div>
    </div>
  );
};

export default App;
