import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-lg mb-6">This is a simple fullstack application built with Bun, React, and TypeScript.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p className="text-md">This component demonstrates how easy it is to build a responsive UI using Tailwind CSS.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p className="text-md">Fetching data from the server is seamless with Bun's integrated server capabilities!</p>
        </div>
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">Get Started</button>
    </div>
  );
};

export default App;
