import "./style.css";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">User List</h1>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        {users.map((user) => (
          <li key={user.id} className="p-4 border-b last:border-b-0">
            <span className="font-semibold">{user.name}</span> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
