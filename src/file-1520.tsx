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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <h1 className="text-4xl font-bold text-white mb-6">User List</h1>
      <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-md">
        <ul className="list-none">
          {users.map(user => (
            <li key={user.id} className="py-2 border-b border-gray-200">
              <span className="font-semibold text-lg">{user.name}</span>
            </li>
          ))}
        </ul>
        {users.length === 0 && <p className="text-center text-gray-500">No users found.</p>}
      </div>
    </div>
  );
};

export default App;
