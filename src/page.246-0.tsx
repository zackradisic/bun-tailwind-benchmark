import React from 'react';

const BunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fast with Bun</h1>
      <p className="text-xl text-gray-700 mb-6">Experience the simplicity of fullstack development!</p>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg">
        <h2 className="text-2xl font-semibold text-green-500 mb-2">Key Features</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-800">🚀 Lightning-fast Bundling</li>
          <li className="text-gray-800">🛠️ Built-in API handling</li>
          <li className="text-gray-800">🌐 Easy HTML routing</li>
          <li className="text-gray-800">🎨 TailwindCSS integration</li>
        </ul>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">Get Started</button>
    </div>
  );
};

export default BunDemo;
