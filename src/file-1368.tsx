import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a simple fullstack app using Bun, React, and TypeScript with Tailwind CSS.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400">Client Button</button>
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-400">Server Button</button>
      </div>
      <footer className="mt-10">
        <p className="text-sm text-gray-500">Powered by Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
