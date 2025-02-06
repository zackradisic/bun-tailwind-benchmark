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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700">
        This is a fullstack application example using Bun, React, and TypeScript.
      </p>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
        Fetch Users
      </button>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Users List:</h2>
        <ul className="list-disc pl-5">
          {/* User items will be dynamically rendered here */}
          <li className="text-gray-600">User 1</li>
          <li className="text-gray-600">User 2</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
