import "./style.css";
import React from "react";

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-10">
      <h1 className="text-white text-5xl font-bold mb-4">Build Fullstack Apps</h1>
      <p className="text-gray-200 text-lg mb-8">
        Experience the speed and simplicity of building fullstack applications with Bun.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Getting Started</h2>
        <p className="text-gray-600 mb-4">Just follow these steps to get started:</p>
        <ol className="list-decimal list-inside text-gray-800">
          <li>Install Bun and Tailwind CSS</li>
          <li>Set up your HTML routes</li>
          <li>Run your Bun server and enjoy!</li>
        </ol>
        <button className="mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default FastAndSimpleDemo;
