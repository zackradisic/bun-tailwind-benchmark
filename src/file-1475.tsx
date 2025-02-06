import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Experience the Speed of Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Building fullstack applications has never been easier!
      </p>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-green-500 mb-2">
          Quick Start Guide
        </h2>
        <ol className="list-decimal list-inside text-gray-800">
          <li className="mb-2">Install Bun and required dependencies.</li>
          <li className="mb-2">Create your HTML entry points.</li>
          <li className="mb-2">Add your routes in <code>Bun.serve()</code>.</li>
          <li>Enjoy coding with super fast reload!</li>
        </ol>
      </div>
      <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started 🚀
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
