import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700">
        This is an example of a fullstack app built with Bun, React, and TypeScript.
      </p>
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Users List</h2>
        <ul className="list-disc list-inside">
          {/* Placeholder for user data */}
          <li className="text-gray-600">User 1</li>
          <li className="text-gray-600">User 2</li>
          <li className="text-gray-600">User 3</li>
        </ul>
      </div>
      <button 
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300" 
        onClick={fetchData}
      >
        Refresh Users
      </button>
    </div>
  );
};

export default App;
