import "./style.css";
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
      <h1 className="text-4xl font-bold mb-4">Welcome to My Bun App</h1>
      <p className="text-lg mb-6">This is a fullstack app using Bun, React, and TypeScript!</p>
      <button
        onClick={fetchUsers}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500 transition duration-300"
      >
        Fetch Users
      </button>
      <div className="mt-8 w-1/2">
        <h2 className="text-2xl">User List</h2>
        <ul className="bg-white shadow rounded-lg mt-2">
          {/* Here you can map through the user data and display it */}
        </ul>
      </div>
    </div>
  );
};

export default App;
