import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">Building fullstack applications has never been easier.</p>
      <div className="flex flex-wrap justify-center space-x-4">
        <button className="px-8 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Client Side
        </button>
        <button className="px-8 py-3 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Server Side
        </button>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Built with <span className="font-semibold text-blue-500">Bun</span> and <span className="font-semibold text-pink-500">Tailwind CSS</span>
      </p>
    </div>
  );
};

export default App;
