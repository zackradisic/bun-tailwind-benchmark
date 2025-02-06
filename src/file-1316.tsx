import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using React & TypeScript.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
        Click Me
      </button>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800">Server Response:</h2>
        <p id="serverMessage" className="text-lg text-gray-600"></p>
      </div>
    </div>
  );
};

export default App;
