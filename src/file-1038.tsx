import React from 'react';

const FastFullstackDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">🚀 Build Fullstack Apps with Bun!</h1>
      <p className="text-xl mb-8">Experience the speed and simplicity of fullstack development.</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="p-6 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Frontend</h2>
          <p className="text-base">Import HTML, CSS & JS effortlessly.</p>
        </div>
        <div className="p-6 bg-green-500 hover:bg-green-600 transition duration-300 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Backend</h2>
          <p className="text-base">API requests made simple.</p>
        </div>
        <div className="p-6 bg-red-500 hover:bg-red-600 transition duration-300 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Deployment</h2>
          <p className="text-base">One command to run your app!</p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition duration-300">
        Get Started with Bun
      </button>
    </div>
  );
};

export default FastFullstackDemo;
