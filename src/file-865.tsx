import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-6">User List</h1>
      <ul className="bg-white rounded-lg shadow-lg p-4 w-1/2">
        {users.length === 0 ? (
          <li className="text-gray-500">Loading...</li>
        ) : (
          users.map(user => (
            <li key={user.id} className="py-2 px-4 border-b border-gray-200 hover:bg-gray-100">
              <span className="font-semibold">{user.name}</span> - {user.email}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
