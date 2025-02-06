import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <button className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition">
        Click Me!
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">API Data</h2>
        <div className="mt-4 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl text-gray-600 mb-2">User List:</h3>
          <ul className="list-disc list-inside">
            <li className="text-gray-700">User 1</li>
            <li className="text-gray-700">User 2</li>
            <li className="text-gray-700">User 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
