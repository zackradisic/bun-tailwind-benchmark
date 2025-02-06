import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun Fullstack App!</h1>
      <p className="mb-8 text-lg text-gray-700">Built with React, TypeScript, and Tailwind CSS!</p>
      <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200">
        Click Me!
      </button>

      <div className="mt-10 p-4 bg-white rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Data:</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-700">Item 1</li>
          <li className="text-gray-700">Item 2</li>
          <li className="text-gray-700">Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
