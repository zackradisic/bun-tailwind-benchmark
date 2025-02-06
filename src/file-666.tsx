import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demo of a fullstack app using React, TypeScript, and Tailwind CSS.</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-400 transition">Button 1</button>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-400 transition">Button 2</button>
        <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-red-400 transition">Button 3</button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">API Response:</h2>
        <div className="bg-white shadow-md rounded p-4">
          <p className="text-gray-700">Fetching data from the server...</p>
          <pre className="mt-2 text-sm text-gray-500">Awaiting server response...</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
