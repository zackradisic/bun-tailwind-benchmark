import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Welcome to My Bun + React App
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a simple demonstration of Bun's new Tailwind integration.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <button className="py-2 px-4 bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out hover:bg-blue-500">
            Click Me
          </button>
          <button className="py-2 px-4 bg-red-600 text-white rounded-lg transition duration-300 ease-in-out hover:bg-red-500">
            Another Button
          </button>
        </div>
        <footer className="mt-6 text-center">
          <p className="text-sm text-gray-500">Powered by Bun & TailwindCSS</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
