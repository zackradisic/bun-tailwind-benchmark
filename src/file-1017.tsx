import React from 'react';

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Build Fullstack Apps Fast with Bun!
      </h1>
      <p className="text-lg text-gray-200 mb-8 max-w-md text-center">
        Experience the speed and simplicity of building fullstack applications
        with Bun's new Tailwind integration!
      </p>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Get Started</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">1. Import your HTML files seamlessly.</li>
          <li className="mb-2">2. Use TailwindCSS for beautifully styled components.</li>
          <li className="mb-2">3. Deploy with a single command.</li>
        </ul>
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>
  );
};

export default FastFullstackDemo;
