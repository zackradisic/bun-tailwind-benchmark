import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to Bun Fullstack!</h1>
      <p className="text-xl text-gray-200 mb-4">Crafted with React, TypeScript, and Tailwind CSS.</p>
      
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Server and Client Integration</h2>
        <p className="text-gray-600 mb-4">This application showcases the simplicity of using Bun for both server and client development.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
