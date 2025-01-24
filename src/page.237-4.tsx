import React from "react";

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Build Fast</h1>
      <p className="text-lg text-gray-700 mb-8">With Bun and Tailwind, creating fullstack applications is a breeze!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>⚡ Blazing fast performance</li>
          <li>🔧 Seamless integration with Tailwind CSS</li>
          <li>🛠️ Easy API handling</li>
        </ul>
      </div>
    </div>
  );
};

export default FastAndSimpleApp;
