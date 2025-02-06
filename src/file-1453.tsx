import "./style.css";
import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-blue-500 mb-6">
        Welcome to Bun with Tailwind
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Build fullstack applications faster than ever!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Simple Setup
          </h2>
          <p className="text-gray-600">
            Quickly integrate Tailwind with Bun's server.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            Fast Development
          </h2>
          <p className="text-gray-600">
            Enjoy instant reloading with Bun's dev server.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Efficient Bundling
          </h2>
          <p className="text-gray-600">
            Bundle frontend and backend with no hassle!
          </p>
        </div>
      </div>
      <footer className="mt-10 text-gray-500">
        &copy; {new Date().getFullYear()} Bun Team. All rights reserved.
      </footer>
    </div>
  );
};

export default FastAndSimpleApp;
