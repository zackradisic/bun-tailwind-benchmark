import "./style.css";
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Users List</h1>
      <ul className="w-full max-w-md bg-white shadow-lg rounded-lg">
        {users.length === 0 ? (
          <li className="p-4 text-center text-gray-500">Loading...</li>
        ) : (
          users.map((user) => (
            <li key={user.id} className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <span className="text-lg font-medium text-gray-800">{user.name}</span>
              <span className="block text-sm text-gray-500">{user.email}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
