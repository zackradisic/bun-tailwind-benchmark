import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <button className="px-4 py-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
        Click Me!
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Frontend</h2>
          <p className="text-gray-600">Built using React and powered by Tailwind CSS!</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Backend</h2>
          <p className="text-gray-600">Fast and efficient API using Bun's server capabilities!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
