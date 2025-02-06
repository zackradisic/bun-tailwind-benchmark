import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-purple-700">Fast Development</h2>
          <p className="mt-2 text-gray-600">Instantly view changes as you develop. Save and see changes in real-time!</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-green-700">Integrated API</h2>
          <p className="mt-2 text-gray-600">Easily run API endpoints alongside your frontend without additional setups.</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-red-700">Server-Side Rendering</h2>
          <p className="mt-2 text-gray-600">Leverage server-side rendering capabilities for optimal performance.</p>
        </div>
      </div>
      <footer className="mt-8">
        <small className="text-gray-500">Created with ❤️ using Bun and Tailwind CSS</small>
      </footer>
    </div>
  );
};

export default App;
