import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500">Server Endpoint</h2>
          <p className="text-gray-600">Fetch users from our API:</p>
          <button
            className=" mt-3 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
            onClick={() => fetch('/api/users')
              .then(response => response.json())
              .then(data => console.log(data))}
          >
            Get Users
          </button>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-500">Client Component</h2>
          <p className="text-gray-600">This is a simple client-side interaction.</p>
          <button className="mt-3 bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
