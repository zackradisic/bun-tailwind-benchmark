import "./style.css";
import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-4">Experience the Speed of Bun!</h1>
      <p className="text-lg text-gray-200 mb-8 max-w-md text-center">
        With Bun's fullstack dev server, you can build applications faster than ever! Try it out now!
      </p>
      <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        Get Started
      </button>
      <div className="mt-8">
        <img src="https://via.placeholder.com/300" alt="Demo Image" className="rounded-lg shadow-xl" />
      </div>
      <footer className="mt-12 text-gray-300">
        <p>&copy; 2023 Bun Development</p>
      </footer>
    </div>
  );
};

export default FastBunDemo;
