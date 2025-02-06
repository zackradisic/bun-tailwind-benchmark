import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
        Get Started
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">API Response:</h2>
        <pre className="mt-2 p-4 bg-white border rounded-lg shadow">
          {/* Fetching data from the server */}
          {/* This will display server response dynamically */}
        </pre>
      </div>
    </div>
  );
};

export default App;
