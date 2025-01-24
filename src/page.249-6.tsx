import React from 'react';

const BunFastComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">
        Experience the Speed of Bun
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Build fullstack applications with unmatched speed and simplicity.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <img
          src="https://via.placeholder.com/300"
          alt="Bun logo"
          className="rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default BunFastComponent;
