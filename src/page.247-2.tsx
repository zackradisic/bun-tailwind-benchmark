import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Build Fullstack Apps Quickly with Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of developing fullstack applications using Bun's seamless integration with Tailwind CSS!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Fast Development</h2>
          <p className="text-gray-600">Enjoy instant feedback with live reloading and quick builds.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Slick APIs</h2>
          <p className="text-gray-600">Effortlessly handle API requests with a simple syntax.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Tailwind CSS</h2>
          <p className="text-gray-600">Style your applications with ease using Tailwind’s utility-first framework.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all">
        Get Started with Bun
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
