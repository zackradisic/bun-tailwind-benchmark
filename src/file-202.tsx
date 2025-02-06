import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">Built with React, TypeScript, and Tailwind CSS</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Side</h2>
          <p className="text-gray-600">Fast and responsive UI rendered using React in Bun!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Side</h2>
          <p className="text-gray-600">APIs quickly accessible via Bun's built-in server!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tailwind Integration</h2>
          <p className="text-gray-600">Easily apply utility-first styles with Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
