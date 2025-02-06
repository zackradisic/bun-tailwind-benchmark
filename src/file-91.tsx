import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-200 mb-8">
        Experience the speed and simplicity of building fullstack applications with React, TypeScript, and Bun.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
      <footer className="mt-8 text-sm text-white">
        <p>API Response from the server:</p>
        <pre className="bg-gray-800 p-4 rounded-lg">
          {JSON.stringify({ message: "Hello from the Bun server!" }, null, 2)}
        </pre>
      </footer>
    </div>
  );
};

export default App;
