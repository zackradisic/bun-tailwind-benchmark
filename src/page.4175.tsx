import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">Welcome to Bun + React + TypeScript!</h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          This is a demo showcasing how fast and simple it is to use Bun with TailwindCSS to build fullstack applications.
        </p>
        <div className="flex justify-evenly">
          <button className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">
            Get Started
          </button>
          <button className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
