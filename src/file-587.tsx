import "./style.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API upon mount
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Registered Users</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition">
                {user.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
