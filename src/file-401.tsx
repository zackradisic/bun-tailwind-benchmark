import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps has never been easier.</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">Render your components effortlessly.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-red-500">Server Side</h2>
          <p className="text-gray-600">Handle API requests with ease.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-500">Composition</h2>
          <p className="text-gray-600">Combine client and server seamlessly.</p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-sm text-gray-500">Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
