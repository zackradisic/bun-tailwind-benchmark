import "./style.css";
import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-6xl font-bold text-white mb-4">Build Fullstack Apps Fast!</h1>
      <p className="text-xl text-white mb-8">With Bun & Tailwind CSS</p>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>✅ Blazing fast development</li>
          <li>✅ Simple setup & integration</li>
          <li>✅ Fullstack capabilities with ease</li>
        </ul>
        <a
          href="#"
          className="inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
        >
          Get Started Now
        </a>
      </div>
      <footer className="absolute bottom-4 text-gray-200">
        <p>Powered by Bun 🐶</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
