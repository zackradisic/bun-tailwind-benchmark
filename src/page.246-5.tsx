import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Build Fullstack Applications with Bun
      </h1>
      <p className="text-gray-700 text-lg mb-4">
        Experience the speed and simplicity of developing with Bun's new features!
      </p>
      <button className="px-6 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out">
        Get Started
      </button>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Fast Development</h2>
          <p className="text-gray-600">No more waiting around! Instant feedback with Bun.</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Fullstack Capabilities</h2>
          <p className="text-gray-600">Easily bundle your front-end and back-end together.</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Seamless API Integration</h2>
          <p className="text-gray-600">Connect your frontend to APIs effortlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default FastAndSimpleBun;
