import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-purple-700">Client Side</h2>
          <p className="text-gray-600">Rendering React components cleanly with Tailwind classes!</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-purple-700">Server Side</h2>
          <p className="text-gray-600">API routes and server-side logic without hassles!</p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-gray-500">Built with ❤️ using Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
