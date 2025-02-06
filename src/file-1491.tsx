import "./style.css";
import React from 'react';

const BunDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">Experience the speed and simplicity of building fullstack applications.</p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <code className="text-sm bg-gray-200 p-2 rounded-md">bun run app.ts</code>
      </div>
    </div>
  );
};

export default BunDemo;
