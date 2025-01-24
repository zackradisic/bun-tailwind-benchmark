import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-white mb-8 max-w-md text-center">
        Experience the speed and simplicity of developing fullstack applications using Bun's built-in features.
      </p>
      <a 
        href="/dashboard" 
        className="px-6 py-3 bg-white text-blue-700 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
      >
        Go to Dashboard
      </a>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Key Features:</h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>🚀 Fast Bundling</li>
          <li>⚡ Simple Setup</li>
          <li>💅 Support for TailwindCSS</li>
          <li>🛠️ Fullstack Capabilities</li>
        </ul>
      </div>
    </div>
  );
};

export default FastAndSimpleBun;
