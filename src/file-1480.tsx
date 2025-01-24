import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      {loading ? (
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
