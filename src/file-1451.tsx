import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-gray-700 mb-6">
        This is an example of a fullstack application using Bun, React, and TypeScript.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition ease-in-out duration-200">
        Click Me!
      </button>
      
      <div className="mt-10 w-full max-w-lg">
        <div className="flex flex-col space-y-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Server Response</h2>
            <p className="text-gray-600">Fetching data from the server...</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Client Interaction</h2>
            <p className="text-gray-600">Interact with your Bun app easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
