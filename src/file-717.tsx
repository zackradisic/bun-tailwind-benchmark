import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack application built with Bun, React, and TypeScript!</p>
      <button className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition">
        Click Me!
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-500">Data from the Server:</h2>
        <pre className="bg-white shadow-md rounded-md p-4 mt-2 max-w-lg">
          {`{ "message": "This data comes from the Bun server." }`}
        </pre>
      </div>
    </div>
  );
};

export default App;
