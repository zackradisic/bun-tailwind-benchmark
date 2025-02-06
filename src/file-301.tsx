import "./style.css";
import React from "react";

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Build Fast with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the simplicity of building fullstack apps using Bun's 
        powerful dev server with TailwindCSS integration.
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
        Get Started
      </button>
      <div className="mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Bun?</h2>
        <ul className="list-disc list-inside mt-3 text-gray-600">
          <li>Fast performance with native bundling</li>
          <li>Easy integration with TailwindCSS</li>
          <li>Single command to run frontend and backend</li>
        </ul>
      </div>
    </div>
  );
};

export default FastBunDemo;
