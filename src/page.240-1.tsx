import React from 'react';

const BunFastDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-10">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fast with Bun!</h1>
      <p className="text-lg text-gray-200 mb-6 text-center">
        Experience the speed and simplicity of building fullstack applications
        with Bun and Tailwind CSS.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
          <h2 className="text-2xl font-semibold mb-2">Frontend Integration</h2>
          <p className="text-gray-700">Seamlessly integrate your frontend with Bun's bundler.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
          <h2 className="text-2xl font-semibold mb-2">API Handling</h2>
          <p className="text-gray-700">Easily manage API requests directly in your server.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
          <h2 className="text-2xl font-semibold mb-2">Tailwind CSS</h2>
          <p className="text-gray-700">
            Utilize Tailwind's utility-first classes to speed up your design process.
          </p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg">
        Get Started
      </button>
    </div>
  );
};

export default BunFastDemo;
