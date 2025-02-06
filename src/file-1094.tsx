import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack application using Bun with Tailwind CSS.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition duration-200">Action 1</button>
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition duration-200">Action 2</button>
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 transition duration-200">Action 3</button>
      </div>
      <div className="mt-8 flex flex-col items-start space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800">Server Data:</h2>
        <pre className="bg-gray-300 p-4 rounded w-full">Fetching data from the server...</pre>
      </div>
    </div>
  );
};

export default App;
