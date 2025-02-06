import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-4">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-indigo-200 mb-8 text-center">
        Experience the speed and simplicity of building fullstack applications 
        with Bun's new <span className="font-semibold">Tailwind integration</span>.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Bun?</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700 mb-2">🚀 Fast bundling and server response.</li>
          <li className="text-gray-700 mb-2">🎨 TailwindCSS integration makes styling easier.</li>
          <li className="text-gray-700 mb-2">✨ Simplified fullstack development workflow.</li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow">
          Get Started with Bun!
        </button>
      </div>
    </div>
  );
};

export default FastAndSimpleDemo;
