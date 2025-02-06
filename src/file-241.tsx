import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">Building fullstack applications has never been this easy!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Get Started
        </button>
        <button className="px-4 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500 transition">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-5">
        <p className="text-sm text-gray-300">Built with ❤️ using Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
