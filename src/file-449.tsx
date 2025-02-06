import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">Building fullstack applications has never been easier.</p>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Bun Superpower</h2>
        <p className="text-gray-600 mb-4">Serve your frontend and backend together with the fastest, simplest setup.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
