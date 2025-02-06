import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Bun!</h1>
        <p className="text-gray-600 mb-6">
          Experience seamless fullstack development with React and TypeScript.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
          Click Me!
        </button>
        <p className="text-sm text-gray-500">Powered by Bun and TailwindCSS</p>
      </div>
    </div>
  );
};

export default App;
