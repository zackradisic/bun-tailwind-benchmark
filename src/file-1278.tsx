import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-10">
        This is a fully functional fullstack application using Bun, React, and TypeScript.
      </p>
      <div className="space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Client Action
        </button>
        <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
          Server Action
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Data from Server:</h2>
        <ul className="list-disc list-inside mt-3">
          <li className="text-gray-600">User 1</li>
          <li className="text-gray-600">User 2</li>
          <li className="text-gray-600">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
