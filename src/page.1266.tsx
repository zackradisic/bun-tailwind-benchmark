import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Users</h1>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {users.map((user) => (
          <li key={user.id} className="border-b border-gray-300 py-2">
            <span className="text-lg font-semibold">{user.name}</span> - 
            <span className="text-gray-600"> {user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
