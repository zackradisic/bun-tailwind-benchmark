import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">Building fullstack apps has never been easier!</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
        Get Started
      </button>
      <div className="mt-8 p-6 max-w-md bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Response:</h2>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600">
          {JSON.stringify({ message: 'Hello from Bun API!' }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
