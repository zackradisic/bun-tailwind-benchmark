import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to Bun & Tailwind Showcase
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a simple demonstration of building fullstack applications with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
          <h2 className="text-2xl text-gray-800">Client Side</h2>
          <p className="text-gray-600">
            Our React components render quickly and efficiently with TailwindCSS classes.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
          <h2 className="text-2xl text-gray-800">Server Side</h2>
          <p className="text-gray-600">
            Bun handles API requests seamlessly within the same server.
          </p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Click Me
      </button>
    </div>
  );
};

export default App;
