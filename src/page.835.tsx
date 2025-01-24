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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-10 text-gray-500 text-sm">
        <p>Powered by Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
