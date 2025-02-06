import "./style.css";
import React from 'react';

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-5">
      <h1 className="text-5xl font-extrabold text-white mb-4">Get Started with Bun!</h1>
      <p className="text-lg text-gray-100 mb-6">Build fullstack applications in seconds!</p>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg">
        <h2 className="text-xl font-bold text-gray-800">Why Choose Bun?</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li className="text-gray-700 flex items-center">
            <span className="bg-green-500 text-white rounded-full w-4 h-4 mr-2"></span>
            Fast and Efficient
          </li>
          <li className="text-gray-700 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-4 h-4 mr-2"></span>
            Simplified Setup
          </li>
          <li className="text-gray-700 flex items-center">
            <span className="bg-red-500 text-white rounded-full w-4 h-4 mr-2"></span>
            Integrated Development Server
          </li>
        </ul>
      </div>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold text-lg rounded-full hover:bg-yellow-300 transition duration-300">
        Try It Now!
      </button>
    </div>
  );
};

export default FastFullstackDemo;
