import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-bold text-white mb-5">Welcome to Your Bun + Tailwind App!</h1>
      <p className="text-xl text-white mb-10">Building fullstack applications has never been easier!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-3">Client Side</h2>
          <p className="text-gray-700">Utilize React components with Tailwind's utility classes to create stunning interfaces.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-3">Server Side</h2>
          <p className="text-gray-700">Bun serves API responses and HTML, all seamlessly integrated.</p>
        </div>
      </div>
      <footer className="bg-white rounded-t-lg shadow-lg p-4 mt-10">
        <p className="text-center text-gray-600">Created with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
