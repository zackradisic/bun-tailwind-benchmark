import "./style.css";
import React from "react";

const App = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-500 mb-5">Welcome to my Bun + Tailwind App!</h1>
    <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun, React, and TypeScript!</p>
    <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-400 transition duration-300">
      Click me for data!
    </button>
    <div className="w-full max-w-md mt-10">
      <h2 className="text-2xl font-semibold text-gray-800">Data from the server:</h2>
      <div className="bg-white shadow-md rounded-lg p-5 mt-4">
        <pre className="text-sm text-gray-600">
          {JSON.stringify({ message: "Hello from the Bun server!" }, null, 2)}
        </pre>
      </div>
    </div>
  </div>
);

export default App;
