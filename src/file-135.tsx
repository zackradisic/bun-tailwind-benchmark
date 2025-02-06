import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">Building fullstack applications just got easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p className="text-gray-600">This part renders your UI with the power of React!</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Click Me!
          </button>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p className="text-gray-600">API responses handled seamlessly with Bun server!</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Fetch Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
