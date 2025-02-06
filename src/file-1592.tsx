import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="mt-2 text-gray-600">React components styled with Tailwind CSS are a breeze to use.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-red-500">Server Side</h2>
          <p className="mt-2 text-gray-600">An easy way to handle API requests and serve your frontend.</p>
        </div>
      </div>
      <footer className="mt-10 text-gray-600">
        <p>Built with <span className="font-bold text-blue-500">Bun</span> and <span className="font-bold text-purple-500">Tailwind CSS</span></p>
      </footer>
    </div>
  );
};

export default App;
