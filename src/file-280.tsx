import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Build Fullstack with Bun
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        Experience the simplicity and speed of Bun's ecosystem.
      </p>
      <button className="px-6 py-3 font-semibold text-blue-800 bg-white rounded-lg shadow-md hover:bg-gray-200 transition ease-in-out duration-300">
        Get Started
      </button>
      <div className="mt-10 p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-gray-800">Features</h2>
        <ul className="list-disc list-inside mt-2">
          <li className="text-gray-700">🔥 Lightning Fast</li>
          <li className="text-gray-700">⚙️ Fullstack Solutions</li>
          <li className="text-gray-700">📦 Easy Bundling</li>
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
