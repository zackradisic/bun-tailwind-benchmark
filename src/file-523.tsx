import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications has never been easier.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-500">Server Side</h2>
          <p className="text-gray-600 mt-2">Manage your APIs seamlessly with Bun's server capabilities.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-purple-500">Client Side</h2>
          <p className="text-gray-600 mt-2">Utilize React and TypeScript to enhance your frontend experience.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default App;
