import React from 'react';

const FastestBunComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-5">
      <h1 className="text-4xl font-bold text-white mb-4">
        Welcome to Bun's Fullstack App
      </h1>
      <p className="text-lg text-gray-200 mb-6">
        Experience the speed and simplicity of building fullstack apps!
      </p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
        Get Started
      </button>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/150"
            alt="Feature 1"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl">Feature One</h2>
            <p className="text-gray-700">
              Discover the power of Bun's fullstack capabilities.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/150"
            alt="Feature 2"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl">Feature Two</h2>
            <p className="text-gray-700">
              Enjoy seamless integration and rapid development.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/150"
            alt="Feature 3"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl">Feature Three</h2>
            <p className="text-gray-700">
              Experience unmatched speed and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastestBunComponent;
