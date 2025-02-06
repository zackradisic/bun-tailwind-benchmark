import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Bun App!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This app showcases Bun's awesome Tailwind CSS integration.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded transition duration-200 hover:bg-blue-600">
          Client Button
        </button>
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded transition duration-200 hover:bg-green-600">
          Fetch Data
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">Server Response:</h2>
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
          <p className="text-gray-600">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
