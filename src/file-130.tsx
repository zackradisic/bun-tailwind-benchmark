import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demo showcasing how easy it is to build fullstack applications using Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-500">Client Side</h2>
          <p className="text-gray-600">This section represents the client side of the application.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-500">Server Side</h2>
          <p className="text-gray-600">This section demonstrates the server side powered by Bun.</p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default App;
