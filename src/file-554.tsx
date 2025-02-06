import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition ease-in-out duration-200">
        Click Me!
      </button>
      <div className="mt-8 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-green-600">Server Response:</h2>
        <pre className="text-gray-800 mt-2">
          {JSON.stringify({ message: "Hello from the Bun server!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
