import "./style.css";
import React from 'react';

const BunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun & Tailwind CSS</h1>
      <p className="text-lg text-gray-700 mb-6">Build fullstack applications with incredible speed and simplicity.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-600">Fast Development</h2>
          <p className="text-md text-gray-600">With Bun, enjoy lightning-fast reloads and minimal setup.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-600">Easy Integration</h2>
          <p className="text-md text-gray-600">Seamlessly combine your backend and frontend in a single application.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-red-600">Modern Tooling</h2>
          <p className="text-md text-gray-600">Utilize the latest web standards and packages without the hassle.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-teal-600">Tailwind Utilities</h2>
          <p className="text-md text-gray-600">Stylize your components with Tailwind CSS effortlessly.</p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-sm text-gray-500">Built with ♥ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default BunDemo;
