import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-green-500 mb-2">Server Response:</h2>
        <p className="text-gray-600">Fetching data from Bun's server...</p>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Click Me!
      </button>
    </div>
  );
};

export default App;
