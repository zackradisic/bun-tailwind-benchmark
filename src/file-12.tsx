import "./style.css";
import React from 'react';

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-bold text-white mb-4 shadow-lg">
        Experience Speed with Bun!
      </h1>
      <p className="text-xl text-white mb-8 text-center max-w-md">
        Build fullstack applications seamlessly with Bun's powerful features and
        tailwind integration.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200">
          Get Started
        </button>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-200">
          Learn More
        </button>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Demo"
          className="rounded-full shadow-xl transition-transform transform hover:scale-110"
        />
        <p className="text-sm text-white mt-2">
          Fast. Simple. Efficient.
        </p>
      </div>
    </div>
  );
};

export default FastFullstackDemo;
