import React from 'react';

const FastSimpleBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white p-10">
      <h1 className="text-5xl font-bold mb-6">🚀 Build Fullstack Apps with Bun!</h1>
      <p className="text-xl mb-4">Experience the speed and simplicity of Bun's new Tailwind integration.</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <code className="bg-gray-800 p-2 rounded text-green-400 font-mono">Bun.serve({`{`}</code>
        <code className="bg-gray-800 p-2 rounded text-green-400 font-mono">static: {`{`}</code>
        <code className="bg-gray-800 p-2 rounded text-green-400 font-mono">"/": homepage,</code>
        <code className="bg-gray-800 p-2 rounded text-green-400 font-mono">`}`}</code>
        <code className="bg-gray-800 p-2 rounded text-green-400 font-mono">`}`}</code>
      </div>
    </div>
  );
};

export default FastSimpleBunDemo;
