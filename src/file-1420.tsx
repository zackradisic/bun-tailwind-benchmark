import React from "react";

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500 p-10">
      <h1 className="text-5xl font-bold text-white mb-4">Build Fullstack Apps Fast!</h1>
      <p className="text-xl text-gray-100 mb-6 text-center">
        Experience the speed and simplicity of building applications with Bun and Tailwind CSS.
      </p>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Fast Setup</h2>
          <p className="text-gray-600">
            Get started in seconds with just a few commands.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Fullstack Integration</h2>
          <p className="text-gray-600">
            Seamlessly integrate frontend and backend in a single app.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Tailwind CSS Support</h2>
          <p className="text-gray-600">
            Style your app with utilities that make CSS fun and easy.
          </p>
        </div>
      </div>
      <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
        Get Started Now!
      </button>
    </div>
  );
};

export default FastBunDemo;
