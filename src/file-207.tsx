import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Experience the Speed of Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Building fullstack applications has never been easier or faster with Bun's new integration!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold mb-2">Backend in a Snap!</h2>
          <p className="text-gray-600">
            Set up your server and handle APIs effortlessly.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold mb-2">Frontend Ready!</h2>
          <p className="text-gray-600">
            Serve HTML and manage client-side rendering with ease.
          </p>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200">
        Get Started Now!
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
