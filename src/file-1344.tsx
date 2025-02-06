import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack application using Bun, React, and TypeScript.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Fetched Data:</h2>
        <ul className="list-disc list-inside">
          {/* Here we would fetch and display data from the server */}
          <li className="text-gray-600">User 1</li>
          <li className="text-gray-600">User 2</li>
          <li className="text-gray-600">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
