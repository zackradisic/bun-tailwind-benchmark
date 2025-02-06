import "./style.css";
import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-10">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fullstack Apps Quickly</h1>
      <p className="text-lg text-gray-100 mb-8">Experience the speed and simplicity of Bun!</p>
      <div className="flex space-x-4">
        <a 
          href="#"
          className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Get Started
        </a>
        <a
          href="#"
          className="bg-white text-green-500 px-6 py-3 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Documentation
        </a>
      </div>
      <footer className="absolute bottom-10">
        <p className="text-sm text-gray-200">Page 34 of 2048</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleApp;
