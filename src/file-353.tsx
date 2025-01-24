import { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-4">User List</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-2">Users</h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 bg-gray-100 rounded-md shadow">
              <span className="font-medium text-gray-800">{user.name}</span>
              <span className="text-gray-500"> - {user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
