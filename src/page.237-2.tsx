import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 to-pink-500">
      <h1 className="text-4xl font-bold text-white mb-4">
        Build Fullstack Applications with Bun
      </h1>
      <p className="text-xl text-white mb-6">
        Experience incredible speed and simplicity!
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 font-semibold text-sm text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-200 focus:outline-none">
          Get Started
        </button>
        <button className="px-6 py-3 font-semibold text-sm text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-200 focus:outline-none">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-3">
          Why Choose Bun?
        </h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">⚡ Ultra-fast performance</li>
          <li className="text-lg mb-2">🌐 Built-in fullstack capabilities</li>
          <li className="text-lg mb-2">🔧 Easy to integrate with tools like Tailwind</li>
        </ul>
      </div>
    </div>
  );
};

export default FastAndSimpleApp;
