import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to My App!</h1>
      <p className="text-lg text-gray-200 mb-8">
        This is a demonstration of a fullstack application using Bun, React, and TypeScript!
      </p>
      <button className="py-2 px-4 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-100 transition">
        Click Me!
      </button>
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Response:</h2>
        <div className="text-sm text-gray-600">Fetching data from the server...</div>
      </div>
    </div>
  );
};

export default App;
