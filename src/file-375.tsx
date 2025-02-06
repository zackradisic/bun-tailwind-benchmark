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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">User List</h1>
      <div className="bg-white shadow-lg rounded-lg p-5 w-full max-w-md">
        <h2 className="text-2xl mb-2">Users:</h2>
        <ul className="list-disc pl-5">
          {users.map((user) => (
            <li key={user.id} className="text-lg text-gray-700 mb-1">{user.name}</li>
          ))}
        </ul>
        {users.length === 0 && <p className="text-gray-500">No users found!</p>}
      </div>
    </div>
  );
};

export default App;
