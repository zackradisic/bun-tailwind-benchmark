import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">
        Build Fast & Simple with Bun!
      </h1>
      <p className="text-xl text-white mb-8">
        Fullstack development made effortless.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10 max-w-md">
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          className="w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default FastAndSimpleApp;
