import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Fast Fullstack App with Bun and Tailwind
        </h1>
        <p className="text-gray-700 text-center mb-6">
          This component showcases how simple it is to build a fullstack application using Bun, React, and TypeScript with TailwindCSS.
        </p>
        <div className="flex justify-around">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Client Side
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Server Side
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">API: <span className="font-bold">/api/users</span> (Fetch users)</p>
        </div>
      </div>
    </div>
  );
};

export default App;
