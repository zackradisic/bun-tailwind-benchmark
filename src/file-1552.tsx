import "./style.css";
import React from "react";

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-5">Build Fullstack Apps Easily!</h1>
      <p className="text-lg text-white mb-10">
        Discover how fast and simple it is to use <span className="font-semibold">Bun</span> with TailwindCSS.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-5 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Bun?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">⚡ Fast development cycle with hot reload</li>
          <li className="text-gray-700">🔧 Fullstack capabilities out of the box</li>
          <li className="text-gray-700">🎨 Stylish UI with TailwindCSS</li>
        </ul>
        <button className="mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FastAndSimpleDemo;
