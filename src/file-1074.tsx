import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-6">
          This is a simple fullstack application demonstrating Bun's power and speed!
        </p>
        <div className="flex flex-col">
          <button className="py-2 px-4 mb-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
            Click Me
          </button>
          <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200">
            Another Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
