import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This application showcases the speed and simplicity of building fullstack apps with Bun, React, and TypeScript.
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
        <pre className="bg-white p-4 rounded-lg shadow mt-2">
          {/* Assume API data will be displayed here */}
        </pre>
      </div>
    </div>
  );
};

export default App;
