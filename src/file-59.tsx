import "./style.css";
import React from 'react';

const FullstackApp: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-6">
          This is a demo of how fast and simple it is to build fullstack applications using Bun, React, and TypeScript!
        </p>
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg transition duration-300 hover:bg-indigo-500">
          Click Me
        </button>
        
        {/* Server Interaction Section */}
        <div className="mt-8 p-4 border-t border-gray-300">
          <h2 className="text-xl font-semibold text-center">Interact with the Server!</h2>
          <p className="text-gray-600 text-sm text-center mb-2">Fetch user data</p>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg transition duration-300 hover:bg-green-500" onClick={() => fetch('/api/users').then(res => res.json()).then(data => console.log(data))}>
            Fetch Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullstackApp;
