import React from 'react';

const FastAndSimpleApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of building server-rendered apps with Bun & TailwindCSS!
      </p>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-500 mb-2">Why Choose Bun?</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <span className="text-gray-800">⚡ Ultra-fast performance</span>
          </li>
          <li className="mb-2">
            <span className="text-gray-800">🛠️ Built-in server and bundler</span>
          </li>
          <li className="mb-2">
            <span className="text-gray-800">🌐 Fullstack capabilities</span>
          </li>
        </ul>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
        Get Started!
      </button>
    </div>
  );
};

export default FastAndSimpleApp;
