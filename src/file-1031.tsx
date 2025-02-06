import "./style.css";
import React from 'react';

const App = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fetched Users</h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="p-4 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              <p className="text-lg text-gray-700">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-600">Created using Bun, React & TypeScript!</p>
      </div>
    </div>
  );
};

export default App;
