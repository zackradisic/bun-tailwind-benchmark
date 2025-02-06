import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application built with React, TypeScript, and TailwindCSS.</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
        Click Me!
      </button>
      <div className="mt-10 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2">API Response:</h2>
        <div id="api-data" className="text-gray-600">
          {/* Data from the API will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default App;
