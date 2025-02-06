import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-xl text-white mb-8">Experience the ease of fullstack development!</p>
      <button className="px-6 py-3 font-semibold text-white bg-blue-700 rounded-lg shadow-lg hover:bg-blue-800 transition ease-in-out duration-300">
        Get Started
      </button>
      <div className="mt-10 p-5 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Here's how it works:</h2>
        <p className="text-gray-600">
          With Bun's integration, serving a React app becomes a breeze. You write your API and frontend in one server and run it effortlessly!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Fast Setup</h3>
          <p className="text-gray-600">Get your app running in minutes with minimal configuration.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Performance</h3>
          <p className="text-gray-600">Built for speed with optimized bundles and assets.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Flexibility</h3>
          <p className="text-gray-600">Integrate any stack seamlessly within your Bun application.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
