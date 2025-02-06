import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using Bun, React, and TypeScript.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Client Part</h2>
          <p className="text-gray-600">Rendered with React on the client-side using Bun's bundler.</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Server Part</h2>
          <p className="text-gray-600">Handles API requests and serves static files seamlessly.</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Tailwind Integration</h2>
          <p className="text-gray-600">Stylized using Tailwind CSS for rapid UI development.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
