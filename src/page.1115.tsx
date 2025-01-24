import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Bun + Tailwind App</h1>
      <p className="text-lg text-white mb-6">This is a demonstration of Bun's new Tailwind integration!</p>
      <button className="px-6 py-3 text-lg text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition duration-300">
        Click Me!
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Client Side</h2>
          <p className="mt-2">Rendering with React and TypeScript has never been easier!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Server Side</h2>
          <p className="mt-2">API calls are handled seamlessly with Bun's HTTP server!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Fast Development</h2>
          <p className="mt-2">Instant feedback with live reloading!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
