import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Client Side</h2>
          <p className="text-gray-600">
            Utilize Bun's fast bundling to serve your React components efficiently.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">Click Me</button>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Server Side</h2>
          <p className="text-gray-600">
            Handle API requests seamlessly with Bun's built-in HTTP server capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
