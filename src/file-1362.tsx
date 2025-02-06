import "./style.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the API on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <ul className="space-y-2">
          {users.length > 0 ? (
            users.map(user => (
              <li key={user.id} className="p-4 bg-gray-200 rounded-lg transition-transform transform hover:scale-105">
                {user.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500">Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
