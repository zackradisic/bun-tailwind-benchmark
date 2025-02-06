import "./style.css";
import React from 'react';

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Experience the speed and simplicity of developing fullstack applications!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Fast Server</h2>
          <p className="text-gray-600">
            Launch your dev server and API with just a few lines of code!
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Seamless Integration</h2>
          <p className="text-gray-600">
            Combine your frontend and backend effortlessly in one place!
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Tailwind Ready</h2>
          <p className="text-gray-600">
            Utilize Tailwind CSS for beautiful responsive designs!
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Development Mode</h2>
          <p className="text-gray-600">
            Enjoy detailed error messages and auto-rebuilding on requests!
          </p>
        </div>
      </div>
      <footer className="mt-8 text-gray-500">
        <p>© 2023 Bun Framework. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FastFullstackDemo;
