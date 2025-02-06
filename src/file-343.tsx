import "./style.css";
import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-5">
      <h1 className="text-4xl font-bold text-white mb-4">Build Fullstack Apps with Bun!</h1>
      <p className="text-lg text-white mb-8">Experience blazing fast development with Tailwind CSS integration.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Rapid Development</h2>
          <p className="text-gray-600">Bun allows you to develop faster than ever.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Fullstack Capabilities</h2>
          <p className="text-gray-600">Run backend and frontend seamlessly.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Seamless Tailwind Integration</h2>
          <p className="text-gray-600">Style your application instantly with Tailwind classes.</p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-white">&copy; 2023 Fast Bun Development</p>
      </footer>
    </div>
  );
};

export default FastBunDemo;
