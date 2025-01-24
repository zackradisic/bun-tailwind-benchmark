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
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-4 bg-blue-100 rounded">
              <h2 className="text-lg">{user.name}</h2>
              <p className="text-gray-600">Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
