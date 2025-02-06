import "./style.css";
import React from "react";

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the power of fullstack development with Bun and TailwindCSS.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-green-500">Fast Builds</h2>
          <p className="mt-2 text-gray-600">Get up and running in no time.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-yellow-500">Simple Integration</h2>
          <p className="mt-2 text-gray-600">Easily integrate your front and back end.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-purple-500">Catch Errors</h2>
          <p className="mt-2 text-gray-600">Detailed error messages during development.</p>
        </div>
      </div>
      <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default FastBunDemo;
