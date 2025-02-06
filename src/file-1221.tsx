import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-500 mb-6">
        Welcome to Bun + Tailwind!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a demonstration of how fast and simple it is to build fullstack applications with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600">Client-Side Rendering</h2>
          <p className="text-gray-600">Effortlessly render components on the client side!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600">API Requests</h2>
          <p className="text-gray-600">Fetch data easily from your API.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600">Server Logic</h2>
          <p className="text-gray-600">Handle requests smoothly with Bun's backend features.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
