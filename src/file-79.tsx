import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-600 mb-8">Fetching users from the server...</p>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        onClick={fetchUsers}
      >
        Fetch Users
      </button>
      <div className="mt-6">
        <ul className="list-disc list-inside">
          <li className="text-gray-700">User 1</li>
          <li className="text-gray-700">User 2</li>
          <li className="text-gray-700">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
