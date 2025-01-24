import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg mb-6">This is a fullstack React + TypeScript application.</p>
      <button
        onClick={fetchUsers}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-2">Users Data</h2>
        <pre className="text-sm text-gray-600"> {/* This will be filled after fetching users */} </pre>
      </div>
    </div>
  );
};

export default App;
