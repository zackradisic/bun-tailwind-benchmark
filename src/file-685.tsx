import "./style.css";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="flex justify-between py-2">
              <span className="text-gray-700">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
