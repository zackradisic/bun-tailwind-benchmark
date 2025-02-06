import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-6">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-lg text-gray-200 mb-4">Building fullstack applications has never been easier.</p>
      <button className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200">
        Get Started
      </button>
      <div className="bg-white dark:bg-gray-800 mt-8 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">API Response:</h2>
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
          {JSON.stringify({ message: "Hello from the API!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
