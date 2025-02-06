import "./style.css";
import React from 'react';

const FastFullstackApp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Experience the Speed of Bun!
      </h1>
      <p className="text-lg text-white mb-8">
        Build fullstack applications effortlessly!
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          Get Started
        </button>
        <button className="px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Why Choose Bun?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>🚀 Fast Development Cycle</li>
          <li>🌐 Fullstack Integration</li>
          <li>🎨 Tailwind CSS Support</li>
          <li>🔧 Easy API Setup</li>
        </ul>
      </div>
    </div>
  );
};

export default FastFullstackApp;
