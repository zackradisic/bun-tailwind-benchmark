import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
      <h1 className="text-5xl font-bold text-white mb-4">Build Fullstack Apps Fast 🏎️</h1>
      <p className="text-xl text-gray-200 mb-8 max-w-md text-center">
        Experience just how simple it is to create fullstack applications with Bun and TailwindCSS.
      </p>
      <div className="flex space-x-4">
        <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 rounded shadow-md">
          Get Started
        </button>
        <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 rounded shadow-md">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-0 mb-4 text-gray-300">
        <p>Powered by Bun ✨</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
