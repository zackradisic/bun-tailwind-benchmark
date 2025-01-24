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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">This is a fullstack app using Bun, React, and TypeScript.</p>
      <button 
        onClick={fetchUsers} 
        className="px-6 py-2 bg-white hover:bg-gray-200 rounded-md shadow-md transition duration-200"
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
