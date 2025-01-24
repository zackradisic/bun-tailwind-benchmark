import React from 'react';

const FastAndSimpleComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500 p-10">
      <h1 className="text-5xl font-bold text-white mb-4 shadow-lg">
        Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg text-gray-200 mb-10">
        Experience the speed and simplicity of Bun's fullstack capabilities!
      </p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md transform transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105">
        Get Started
      </button>
      <div className="mt-10">
        <img src="your-image-url" alt="Bun Logo" className="w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300" />
      </div>
      <footer className="mt-20 text-gray-300 text-sm">
        Powered by <span className="font-bold text-white">Bun</span>
      </footer>
    </div>
  );
};

export default FastAndSimpleComponent;
