import "./style.css";
import React from 'react';

const FastAndSimpleComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fullstack Apps Fast with Bun!</h1>
      <p className="text-lg text-white mb-8">
        Experience the simplicity and speed of Bun for your fullstack development.
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300"
        >
          Get Started
        </a>
        <a
          href="#"
          className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-300"
        >
          Documentation
        </a>
      </div>
      <svg
        className="mt-10 animate-bounce h-20 w-20 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 13h2v-2h-2v2zM10 8a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
    </div>
  );
};

export default FastAndSimpleComponent;
