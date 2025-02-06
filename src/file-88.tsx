import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-6">Building fullstack applications has never been easier!</p>
      <div className="flex space-x-4">
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded shadow-lg hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
        <button className="bg-white text-green-500 font-bold py-2 px-4 rounded shadow-lg hover:bg-gray-200 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white mb-2">API Endpoints:</h2>
        <ul className="list-disc text-lg text-gray-200">
          <li><span className="font-bold">GET</span> /api/users - Fetch all users</li>
          <li><span className="font-bold">POST</span> /api/users - Create a new user</li>
        </ul>
      </div>
      <div className="border-t border-gray-200 mt-10 pt-4">
        <p className="text-sm text-gray-300">Fast, simple, and scalable fullstack development.</p>
      </div>
    </div>
  );
};

export default App;
