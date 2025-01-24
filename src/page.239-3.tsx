import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of crafting fullstack applications with Bun's new Tailwind integration.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-green-500">Fast</h2>
          <p className="text-gray-600 mt-2">
            Get your applications running in no time with Bun's optimized bundling and serving capabilities!
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-purple-500">Simple</h2>
          <p className="text-gray-600 mt-2">
            Simplify your workflow by managing frontend and backend together seamlessly with Bun.
          </p>
        </div>
      </div>
      <footer className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started with Bun
        </button>
      </footer>
    </div>
  );
};

export default FastAndSimpleBun;
