import React from "react";

const FastBunApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Fast Bun with Tailwind!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Build fullstack applications effortlessly with Bun's new Tailwind integration.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-green-500">Lightning Fast</h2>
          <p className="text-gray-600">Enjoy speedy development and performance.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-yellow-500">Seamless Integration</h2>
          <p className="text-gray-600">Tailwind classes right at your fingertips.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-red-500">Fullstack Power</h2>
          <p className="text-gray-600">Run frontend and backend together with ease.</p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-gray-500">Built using Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default FastBunApp;
