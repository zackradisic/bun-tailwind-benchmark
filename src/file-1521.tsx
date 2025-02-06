import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-200 mb-8">
        Experience the ease of building fullstack applications with React, TypeScript, and TailwindCSS!
      </p>
      <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out">
        Get Started
      </button>
      <div className="mt-10 flex space-x-4">
        <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-green-600 text-2xl font-bold">1</span>
        </div>
        <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-green-600 text-2xl font-bold">2</span>
        </div>
        <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-green-600 text-2xl font-bold">3</span>
        </div>
      </div>
    </div>
  );
};

export default App;
