// src/App.tsx
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Building ultra-fast fullstack apps has never been easier.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">Render responsive UI with React and Tailwind effortlessly.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-blue-500">Server Side</h2>
          <p className="text-gray-600">Handle API requests seamlessly with Bun's fullstack capabilities.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-red-500">Fast & Simple</h2>
          <p className="text-gray-600">Experience rapid development with minimal setup.</p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-gray-500">Built with ☕ and 💖 using Bun.</p>
      </footer>
    </div>
  );
};

export default App;
