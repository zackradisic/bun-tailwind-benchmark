import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="font-bold text-4xl text-blue-600 mb-6">
        🚀 Build Fullstack Apps Fast with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Experience the simplicity and speed of using Bun's new Tailwind integration.
      </p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
      <div className="mt-10 p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Features:</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">🚀 Effortless Fullstack Development</li>
          <li className="mb-2">⚡ Blazing Fast Performance</li>
          <li className="mb-2">🌈 Tailwind CSS Integration</li>
          <li>👨‍💻 Simple API for Developers</li>
        </ul>
      </div>
      <footer className="mt-12 text-gray-600">
        &copy; {new Date().getFullYear()} Bun. All rights reserved.
      </footer>
    </div>
  );
};

export default FastAndSimpleBun;
