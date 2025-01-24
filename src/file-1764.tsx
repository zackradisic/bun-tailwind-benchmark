import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Bun & Tailwind</h1>
      <p className="text-lg mb-4">Building fullstack applications has never been easier!</p>
      <button
        onClick={fetchUsers}
        className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-200"
      >
        Fetch Users
      </button>
      <p className="mt-6">Check the console for output!</p>
    </div>
  );
};

export default App;
