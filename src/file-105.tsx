import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="mb-8 text-lg text-gray-700">
        This is a demo of a fullstack application built with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Client Component</h2>
          <p className="mt-2 text-gray-600">Render dynamic content here!</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Server Component</h2>
          <p className="mt-2 text-gray-600">Handle API requests and responses!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
