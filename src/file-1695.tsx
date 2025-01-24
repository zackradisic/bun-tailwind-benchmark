import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Fast Fullstack Apps with Bun!</h1>
      <p className="text-lg text-gray-200 mb-8">
        Experience how easy it is to build fullstack applications with Bun and Tailwind CSS.
      </p>
      <button className="px-6 py-3 bg-white rounded-full text-blue-600 font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
        Get Started
      </button>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-blue-600">Fast Development</h2>
          <p className="text-gray-600">Rapidly build apps with built-in bundling.</p>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-blue-600">Seamless Deployment</h2>
          <p className="text-gray-600">Deploy your apps effortlessly with Bun's server.</p>
        </div>
      </div>
      <footer className="absolute bottom-0 text-center w-full p-4 bg-gray-800">
        <p className="text-gray-400">Built with ❤️ using Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default FastBunDemo;
