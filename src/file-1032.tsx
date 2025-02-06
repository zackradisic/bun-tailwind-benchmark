import "./style.css";
import React from "react";

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Experience the speed and simplicity of Bun's dev server.
      </p>
      <div className="space-y-4">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Why Bun?</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Fast & Efficient Development</li>
            <li>Seamless Frontend and Backend Integration</li>
            <li>Instant Live Reloading</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FastAndSimpleBun;
