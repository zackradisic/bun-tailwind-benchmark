import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Fullstack App!</h1>
      <p className="text-lg text-gray-700 mb-8">Built with React, TypeScript, and TailwindCSS using Bun!</p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-green-500">Server Response:</h2>
        <div className="mt-4">
          <pre className="bg-gray-200 p-2 rounded overflow-x-auto">
            {JSON.stringify({ message: "Hello from Bun server!" }, null, 2)}
          </pre>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
    </div>
  );
};

export default App;
