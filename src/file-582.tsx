import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-5">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4 animate-bounce">
        Build Fullstack Apps with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the speed and simplicity of building applications.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <img src="https://via.placeholder.com/300" alt="Demo Image" className="rounded-xl shadow-lg" />
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Powered by Bun with TailwindCSS</p>
      </footer>
    </div>
  );
};

export default FastBunDemo;
