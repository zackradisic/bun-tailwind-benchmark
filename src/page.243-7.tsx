import React from "react";

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-gray-200 mb-6">
        Experience the speed and simplicity of Bun's fullstack capabilities.
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-200">
        Get Started
      </button>
      <div className="mt-10">
        <img
          src="https://via.placeholder.com/300"
          alt="Fast and Simple"
          className="rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <footer className="mt-8 text-gray-300">
        <p>Made with ❤️ using Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
