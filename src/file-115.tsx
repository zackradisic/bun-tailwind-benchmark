import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <div className="w-3/4 bg-white shadow-md rounded-lg p-5">
        <h2 className="text-2xl mb-4">Fetched Users</h2>
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="p-4 border border-gray-300 rounded-md hover:bg-gray-50">
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
