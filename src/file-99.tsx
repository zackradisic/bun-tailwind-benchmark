import "./style.css";
import React from "react";

const FastBunApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
        Build Fullstack Apps with Bun!
      </h1>
      <p className="text-xl text-white mb-8">
        Experience the speed of Bun and Tailwind integration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold text-indigo-600">Frontend</h2>
          <p className="mt-2 text-gray-700">
            Quick setup with HTML routing in Bun to serve your front end.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold text-indigo-600">Backend</h2>
          <p className="mt-2 text-gray-700">
            Easy API handling with Bun's fetch capabilities.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold text-indigo-600">CSS Magic</h2>
          <p className="mt-2 text-gray-700">
            Style your apps effortlessly with TailwindCSS.
          </p>
        </div>
      </div>
      <button className="mt-10 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default FastBunApp;
