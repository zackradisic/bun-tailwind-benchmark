import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-4 animate-bounce">Build Fast with Bun!</h1>
      <p className="text-lg text-white text-center mb-6">
        Experience the simplicity of fullstack development with Bun's new Tailwind integration.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">⚡ Fast and efficient bundling</li>
          <li className="mb-2">🎨 Seamless Tailwind integration</li>
          <li className="mb-2">📦 Fullstack capabilities out of the box</li>
        </ul>
      </div>
      <footer className="mt-12 text-white">
        <p>🌟 Get started today and transform your development experience!</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
