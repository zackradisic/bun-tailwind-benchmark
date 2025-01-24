import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <header className="text-white text-4xl font-bold mb-8">
        Welcome to Bun with React & TypeScript
      </header>
      <main className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fullstack App</h2>
        <p className="text-gray-700 mb-6">
          This is a demonstration of using Bun's new Tailwind integration to build
          a fullstack application with ease and speed!
        </p>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
          Click Me!
        </button>
        <div className="mt-6 p-4 border border-gray-300 rounded-lg">
          <p className="text-gray-600">API Data will be shown here!</p>
        </div>
      </main>
    </div>
  );
};

export default App;
