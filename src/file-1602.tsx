import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-5">
      <h1 className="text-5xl font-bold text-white mb-4">Build Fullstack Apps Fast!</h1>
      <p className="text-xl text-gray-100 mb-8">With Bun & TailwindCSS integration, creating apps has never been easier.</p>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-1">🚀 Blazing fast performance</li>
          <li className="mb-1">🛠️ Zero setup for fullstack development</li>
          <li className="mb-1">🎨 Beautifully styled with TailwindCSS</li>
        </ul>
      </div>
      <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
        Get Started with Bun
      </button>
    </div>
  );
};

export default FastAndSimpleBun;
