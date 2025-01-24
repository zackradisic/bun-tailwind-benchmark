import React from 'react';

const BunTailwindDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-8">
      <h1 className="text-4xl font-extrabold text-white mb-4">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-white mb-8">Experience the speed and simplicity of Bun's fullstack development!</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2">Fast Development</h2>
          <p className="text-gray-700">Start building your applications without the hassles of setup.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2">Built-in Features</h2>
          <p className="text-gray-700">Use powerful features like bundling and hot module reloading out of the box.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2">Flexible Routing</h2>
          <p className="text-gray-700">Manage your frontend and backend routes seamlessly with HTML imports.</p>
        </div>
      </div>
      <button className="mt-8 bg-white text-blue-500 py-2 px-4 rounded shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
        Get Started!
      </button>
    </div>
  );
};

export default BunTailwindDemo;
