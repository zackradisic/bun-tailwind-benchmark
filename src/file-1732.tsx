import "./style.css";
import React from 'react';

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        🚀 Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        Experience lightning-fast development with <span className="font-semibold text-blue-500">Bun</span> and <span className="font-semibold text-blue-500">Tailwind CSS</span>!
      </p>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Bun?
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li className="text-gray-600">⚡ Extremely fast bundling</li>
          <li className="text-gray-600">🌐 Fullstack support out of the box</li>
          <li className="text-gray-600">🌈 Easy integration with Tailwind CSS</li>
        </ul>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
          Get Started
        </button>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Page 34 of 2048 - Happy coding!</p>
      </footer>
    </div>
  );
}

export default FastFullstackDemo;
