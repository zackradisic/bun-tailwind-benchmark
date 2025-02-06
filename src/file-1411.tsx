import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Bun + React + Tailwind</h1>
        <p className="text-gray-600 mb-6">This is a demo of using Bun with Tailwind CSS!</p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Click Me
        </button>
        <div className="mt-4">
          <p className="text-sm text-gray-500">This app is super fast, thanks to Bun!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
