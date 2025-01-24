import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">🚀 Build Fast with Bun!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Discover how effortlessly you can create fullstack applications using Bun's new Tailwind integration!
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 m-4 max-w-sm transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-center mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Fullstack capabilities</li>
            <li>Seamless integration with TailwindCSS</li>
            <li>Fast development cycle</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 m-4 max-w-sm transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-center mb-2">Get Started</h2>
          <p className="text-gray-700 mb-4">Run your front and backend effortlessly!</p>
          <code className="block bg-gray-100 p-2 rounded text-sm">bun run app.ts</code>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-gray-500">Powered by <span className="font-semibold text-indigo-600">Bun</span> & <span className="font-semibold text-indigo-600">TailwindCSS</span></p>
      </footer>
    </div>
  );
};

export default FastAndSimpleBun;
