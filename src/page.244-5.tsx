import React from "react";

const FastBunApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-8">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Fast Bun!</h1>
      <p className="text-xl text-white mb-6">
        Experience the speed of building fullstack apps with Bun and Tailwind
      </p>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
        <h2 className="text-3xl font-semibold mb-2">Get Started</h2>
        <p className="text-base mb-4">
          Build your application with simple steps using Bun's powerful bundling features and Tailwind for styling.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-0 p-4 text-white">
        <span>&copy; 2023 Fast Bun App. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default FastBunApp;
