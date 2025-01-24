import React from 'react';

const BunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to Bun & Tailwind</h1>
      <p className="text-lg text-gray-700 mb-6">Experience the speed and simplicity of building fullstack applications!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600">Fast Development</h2>
          <p>Get started quickly with an integrated server and bundler.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600">Integrated TailwindCSS</h2>
          <p>Style your components easily with Tailwind utility classes.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600">Fullstack Capabilities</h2>
          <p>Handle both frontend and backend in a single seamless environment.</p>
        </div>
      </div>
      <footer className="mt-10 text-gray-600 text-sm">
        <p>Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default BunDemo;
