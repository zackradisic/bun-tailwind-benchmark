import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600">Welcome to Bun + Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a simple demonstration of how fast and simple it is to use Bun with React and TypeScript.
      </p>
      <div className="mt-8 p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-500">API Data:</h2>
        <div className="mt-2 p-3 border border-gray-300 rounded-lg">
          {/* Placeholder for API data */}
          <p className="text-gray-800">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
