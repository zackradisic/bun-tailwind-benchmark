import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using React, TypeScript, and Tailwind CSS.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-green-500">Fast Development</h2>
          <p className="text-gray-600">Bun's fullstack dev server bundles your frontend and backend effortlessly!</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-red-500">Seamless Integration</h2>
          <p className="text-gray-600">Integrate Tailwind and your favorite frontend libraries with minimal setup!</p>
        </div>
      </div>
      <div className="mt-10">
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
