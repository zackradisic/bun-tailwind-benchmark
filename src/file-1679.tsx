import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-white text-6xl font-bold mb-4 animate-bounce">
        Build Fullstack Apps with Bun!
      </h1>
      <p className="text-white text-lg mb-8">
        Experience the speed of Bun's development server with seamless integration.
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-300">
          Get Started
        </button>
        <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition-all duration-300">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-10">
        <p className="text-white text-sm">
          Powered by <span className="font-bold">Bun</span> & <span className="font-bold">Tailwind CSS</span>
        </p>
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
