import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple fullstack application demonstrating Bun's seamless integration with React and Tailwind CSS.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition">
        Click Me!
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <div className="p-4 bg-white shadow rounded-lg mt-2">
          <p className="text-gray-600">Fetching data from server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
