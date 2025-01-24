import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
      <h1 className="text-5xl font-bold text-white mb-5 drop-shadow-lg">Experience the Speed of Bun</h1>
      <p className="text-lg text-gray-300 mb-8">Build Fullstack Applications with Effortless Setup</p>
      <button className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
        Get Started
      </button>
      <div className="mt-10 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Unified server for frontend and backend</li>
          <li>Fast bundling and hot reloading</li>
          <li>Simple to use with Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default FastBunDemo;
