import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using Bun, React, and TypeScript.</p>
      <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-200">
        Click Me
      </button>
      <div className="mt-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Server Response:</h2>
        <div className="p-4 bg-white border shadow-md rounded-lg">
          <p className="text-gray-600">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
