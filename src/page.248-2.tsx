import React from "react";

const BunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-6">Build fullstack applications like never before.</p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-12 p-8 bg-white shadow-lg rounded-lg max-w-sm">
        <h2 className="text-2xl font-semibold mb-3">Why Choose Bun?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">🚀 Super fast bundling and serving</li>
          <li className="text-gray-700">🔌 Easily integrate TailwindCSS</li>
          <li className="text-gray-700">🌍 Fullstack development simplified</li>
        </ul>
      </div>
      <footer className="mt-16 text-gray-500 text-sm">
        Built with 💙 using Bun & TailwindCSS
      </footer>
    </div>
  );
};

export default BunDemo;
