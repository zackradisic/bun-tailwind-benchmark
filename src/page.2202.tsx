import React from 'react';

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to Bun's Tailwind Integration!</h1>
      <p className="mb-8">This app demonstrates how fast and simple it is to build fullstack applications with Bun, React, and TypeScript!</p>
      <button 
        onClick={fetchUsers} 
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition ease-in-out duration-300"
      >
        Fetch Users
      </button>
    </div>
  );
};

export default App;
