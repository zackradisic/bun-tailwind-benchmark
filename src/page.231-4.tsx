import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Build Fullstack Apps Fast!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Experience the power of Bun with TailwindCSS integration. You can build and serve your fullstack applications with minimal effort and maximum performance!
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <div className="mt-6">
          <p className="text-sm text-gray-500">Only 5 minutes to set up!</p>
        </div>
      </div>
      <footer className="mt-12 text-center text-gray-500">
        <p>Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleBun;
