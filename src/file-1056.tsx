import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">Quickly build fullstack apps with Bun, React, and TypeScript.</p>
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
        Click Me!
      </button>
      <div className="mt-4">
        <h2 className="text-2xl text-gray-800">Server Response:</h2>
        <div className="bg-white border rounded-lg p-4 shadow-lg">
          <pre className="text-sm text-gray-600">Fetching data from server...</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
