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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-extrabold text-white mb-6">
        User List
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Users:</h2>
        <ul className="list-disc pl-5">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="text-lg text-gray-800">
                {user.name} - {user.email}
              </li>
            ))
          ) : (
            <li className="text-lg text-gray-800">No users found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
