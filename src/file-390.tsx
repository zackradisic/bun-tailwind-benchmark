import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Fast and Simple with Bun</h1>
      <p className="text-lg text-gray-700 mb-4">Build fullstack applications effortlessly!</p>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
          <h2 className="text-xl font-semibold text-green-500">Integrate Easily</h2>
          <p className="text-gray-600">Bun allows seamless integration with your favorite libraries.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
          <h2 className="text-xl font-semibold text-orange-500">Rapid Development</h2>
          <p className="text-gray-600">Spend less time setting up and more time building.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
          <h2 className="text-xl font-semibold text-purple-500">Fullstack Power</h2>
          <p className="text-gray-600">Run your frontend and backend in one convenient setup!</p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
};

export default FastAndSimpleBun;
