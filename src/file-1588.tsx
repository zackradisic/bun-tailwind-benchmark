import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-600 mb-8">Building fullstack applications has never been easier!</p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md shadow-md transition duration-200">
          Client Button
        </button>
        <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md transition duration-200">
          Server Button
        </button>
      </div>
      <footer className="mt-12 text-gray-500 text-center">
        <p>&copy; 2023 Bun + Tailwind Integration Demo</p>
      </footer>
    </div>
  );
};

export default App;
