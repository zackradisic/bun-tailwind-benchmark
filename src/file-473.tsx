import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fast and Simple with Bun!</h1>
      <p className="text-lg text-white mb-8">Experience the power of a fullstack application development!</p>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li className="mb-2">🚀 Blazing fast performance</li>
          <li className="mb-2">🛠️ Built-in fullstack capabilities</li>
          <li className="mb-2">🎨 Tailwind CSS integration for rapid UI design</li>
          <li>📦 Easy bundling of frontend and backend</li>
        </ul>
      </div>
      <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold rounded-lg transition duration-300">
        Get Started!
      </button>
    </div>
  );
};

export default FastAndSimpleBun;
