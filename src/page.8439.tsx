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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <button
        onClick={fetchUsers}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Fetch Users
      </button>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-white shadow rounded-lg">User 1</div>
        <div className="p-4 bg-white shadow rounded-lg">User 2</div>
        <div className="p-4 bg-white shadow rounded-lg">User 3</div>
      </div>
    </div>
  );
};

export default App;
