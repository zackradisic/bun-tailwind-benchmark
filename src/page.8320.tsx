import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Experience the speed of Bun with the utility-first magic of TailwindCSS.
        </p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Action 1
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
            Action 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
