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
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600">Users List</h1>
      <div className="mt-4 w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 border rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
