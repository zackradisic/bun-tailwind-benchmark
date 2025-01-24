import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Bun!</h1>
      <p className="text-lg mb-6">Experience the speed of fullstack development with ease.</p>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Fast & Simple</h2>
        <p className="text-gray-600 mb-4">
          Build your applications effortlessly with Bun's powerful tools and Tailwind integration.
        </p>
        <button className="mt-3 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
      </div>
      <footer className="mt-10 text-sm">
        <p>Page 34 of 2048</p>
      </footer>
    </div>
  );
};

export default FastBunDemo;
