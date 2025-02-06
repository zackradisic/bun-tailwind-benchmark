import "./style.css";
import React from "react";

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 p-6">
      <h1 className="text-4xl font-extrabold text-white mb-4">
        🚀 Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg text-white mb-8">
        Experience the speed and simplicity of development!
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-teal-600 font-bold py-2 px-4 rounded shadow-lg hover:bg-teal-200 transition duration-300">
          Get Started
        </button>
        <button className="border border-white text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-white hover:text-teal-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <code className="bg-gray-800 text-white p-3 rounded-md">
          bun run app.ts
        </code>
      </div>
    </div>
  );
};

export default FastFullstackDemo;
