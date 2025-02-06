import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-white mb-8">Building fullstack applications is now faster and simpler.</p>
      <button className="px-6 py-2 text-lg font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white">API Data</h2>
        <ul className="mt-4 bg-white p-4 rounded-lg shadow-lg">
          <li className="text-gray-800 py-2 border-b border-gray-300">User 1</li>
          <li className="text-gray-800 py-2 border-b border-gray-300">User 2</li>
          <li className="text-gray-800 py-2">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
