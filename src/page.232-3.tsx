import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-5">
      <h1 className="text-5xl font-bold text-white mb-5">Build Fullstack Apps with Bun</h1>
      <p className="text-xl text-gray-200 mb-10">
        Experience the speed and simplicity of Bun's fullstack capabilities.
      </p>
      <div className="bg-white rounded-lg p-5 shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="my-2">⚡ Fast performance and bundling.</li>
          <li className="my-2">📦 Simple setup with integrated dev server.</li>
          <li className="my-2">🌿 TailwindCSS support for stylish UIs.</li>
        </ul>
      </div>
      <a
        href="https://bun.sh"
        className="mt-5 inline-block px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-300"
      >
        Get Started with Bun
      </a>
    </div>
  );
};

export default FastAndSimpleDemo;
