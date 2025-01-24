import React from "react";

const BunDemoComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-teal-600 mb-4">Welcome to the Bun Demo!</h1>
      <p className="text-lg text-gray-700 mb-2">Experience the power of fullstack development with Bun.</p>
      <div className="flex space-x-4 mt-6">
        <button className="px-4 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 transition duration-300">
          Get Started
        </button>
        <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded-md shadow hover:bg-teal-500 hover:text-white transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Why Bun?</h2>
        <ul className="list-disc pl-5 mt-2">
          <li className="text-gray-600">🚀 Fast and efficient bundling</li>
          <li className="text-gray-600">🔗 Seamless integration with TailwindCSS</li>
          <li className="text-gray-600">💡 Simple setup for fullstack applications</li>
        </ul>
      </div>
    </div>
  );
};

export default BunDemoComponent;
