import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun Fullstack with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This demonstrates how easy it is to build fullstack applications using Bun, React, and TypeScript!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold">Client</h2>
          <p className="text-gray-600">This part is served directly from the Bun server, providing a seamless experience!</p>
        </div>
        <div className="bg-white p-5 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold">Server</h2>
          <p className="text-gray-600">Handles API requests effortlessly with built-in support for various routes!</p>
        </div>
        <div className="bg-white p-5 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold">Integration</h2>
          <p className="text-gray-600">Bun integrates beautifully with Tailwind CSS for rapid styling!</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default App;
