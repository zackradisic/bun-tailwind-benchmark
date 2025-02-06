import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-base mb-6">This is a fast and simple way to build fullstack applications using React & TypeScript.</p>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
