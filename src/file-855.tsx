import { useEffect, useState } from 'react';

export default function App() {
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 max-w-md w-full bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Users List</h1>
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="p-4 bg-gray-200 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Refresh Users
          </button>
        </div>
      </div>
    </div>
  );
}
