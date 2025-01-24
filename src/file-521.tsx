import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
        <p className="text-gray-700 mb-4">This is a fullstack application using Bun with React and TypeScript.</p>
        <div className="flex justify-between mb-6">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
            Fetch Data
          </button>
          <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none">
            Reset
          </button>
        </div>
        <div id="dataContainer" className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Data:</h2>
          <ul className="list-disc ml-5">
            <li className="text-gray-600">Loading data...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
