import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        Welcome to Bun & Tailwind!
      </h1>
      <p className="text-lg text-gray-700 mb-5">
        This is a fullstack application powered by Bun, React, and TypeScript.
      </p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold text-gray-800">Current Users:</h2>
        <ul className="list-disc list-inside">
          {/* Fetch users from the server */}
          <li className="py-2">User 1</li>
          <li className="py-2">User 2</li>
          <li className="py-2">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
