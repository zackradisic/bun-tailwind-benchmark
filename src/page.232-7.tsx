import React from 'react';

const BunFastDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Experience the Speed of Bun!</h1>
      <p className="text-lg text-gray-700 mb-10">
        Building fullstack applications has never been easier or faster. Use Bun to serve your frontend and backend seamlessly.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Bun?</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>🚀 Fast bundling with zero configuration</li>
          <li>🔄 Development mode with hot reloading</li>
          <li>🌐 Fullstack capabilities in a single server</li>
          <li>🎨 Tailwind CSS integration for beautiful designs</li>
        </ul>
      </div>
    </div>
  );
};

export default BunFastDemo;
