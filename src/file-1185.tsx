import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">This is a fullstack app powered by Bun, React, and TypeScript.</p>
      <button className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Click Me!
      </button>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold">Server Side</h2>
          <p className="mt-2 text-sm text-gray-600">Fetch data and API routes efficiently using Bun.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold">Client Side</h2>
          <p className="mt-2 text-sm text-gray-600">Render components seamlessly using React with Tailwind styles.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
