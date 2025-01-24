import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Welcome to My Bun App!
        </h1>
        <p className="text-gray-600 mb-6">
          This is a simple example showcasing the Tailwind CSS integration with Bun.
        </p>
        <div className="flex flex-col space-y-4">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-200">
            Action 1
          </button>
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition duration-200">
            Action 2
          </button>
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition duration-200">
            Action 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
