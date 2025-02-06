import "./style.css";
import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col items-center justify-center space-y-6 p-5">
      <h1 className="text-5xl font-extrabold text-white shadow-lg">
        Build Fullstack with Bun 🚀
      </h1>
      <p className="text-lg text-white text-center">
        Experience the speed and simplicity of building fullstack applications with Bun and Tailwind CSS!
      </p>
      <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-200 transition duration-300">
        Get Started
      </button>
      <div className="flex space-x-4">
        <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold">Frontend</h2>
          <p>Lightning-fast frontend bundling with zero hassle!</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold">Backend</h2>
          <p>Easy API integration without any extra steps!</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold">Deployment</h2>
          <p>Deploy in seconds with powerful built-in features!</p>
        </div>
      </div>
      <footer className="mt-10 text-white text-sm">
        &copy; {new Date().getFullYear()} Bun Fullstack Tips
      </footer>
    </div>
  );
};

export default FastAndSimpleApp;
