import "./style.css";
import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="p-10 bg-white shadow-md rounded-lg max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Build Fast with Bun!</h1>
        <p className="text-gray-600 mb-6">Experience the speed and simplicity of fullstack development.</p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FastAndSimpleApp;
