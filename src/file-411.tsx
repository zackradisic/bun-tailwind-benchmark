import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-5">Welcome to my Bun App!</h1>
      <p className="text-lg text-gray-700">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="mt-10 flex flex-wrap justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Server Response:</h2>
          <p className="text-gray-600">Fetching data from the Bun server...</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Client Interaction:</h2>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Click Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
