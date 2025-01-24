import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a simple demonstration showcasing how fast and easy it is to use Bun with Tailwind CSS.
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition">
          Click Me!
        </button>
        <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-lg transition">
          Don't Click Me!
        </button>
      </div>
      <footer className="absolute bottom-0 w-full text-center p-4 bg-gray-800 text-white">
        Made with ❤️ using Bun, React, and Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
