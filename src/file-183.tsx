import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Client Side</h2>
          <p className="text-gray-600 mt-2">Enjoy using your favorite frontend frameworks like React.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Server Side</h2>
          <p className="text-gray-600 mt-2">Bun makes server handling smoother with built-in API routes.</p>
        </div>
      </div>
      <button className="mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default App;
