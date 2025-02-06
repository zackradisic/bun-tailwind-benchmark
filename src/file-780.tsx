import "./style.css";
import React from 'react';

const App = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Bun + Tailwind CSS</h1>
        <p className="text-center text-gray-700 mb-6">
          This is a fullstack application built with Bun, React, and TypeScript!
        </p>
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={fetchUsers}
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
