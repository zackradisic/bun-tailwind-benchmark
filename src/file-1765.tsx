import "./style.css";
import React from "react";

const FastSimpleBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">
        🚀 Build Fullstack Apps with Bun Fast!
      </h1>
      <p className="text-lg text-white mb-6">
        Experience unmatched speed and simplicity using Bun with Tailwind CSS.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Why Choose Bun?
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-800">🚀 Lightning-fast bundling</li>
          <li className="text-gray-800">👩‍💻 Fullstack capabilities</li>
          <li className="text-gray-800">🎨 TailwindCSS integration</li>
        </ul>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FastSimpleBunDemo;
