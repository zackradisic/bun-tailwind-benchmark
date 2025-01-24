import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">Home</button>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">Dashboard</button>
        <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">About</button>
      </div>
      <div className="mt-10 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-gray-800">API Response:</h2>
        <p className="text-gray-600">Fetching data from server...</p>
      </div>
    </div>
  );
};

export default App;
