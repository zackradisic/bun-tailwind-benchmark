import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack application with React, TypeScript, and Tailwind CSS using Bun!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Server Side</h2>
          <p className="text-gray-600">
            Fetching data from the server is as easy as calling your APIs. Bun's built-in server allows you to handle requests with ease!
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            Fetch data
          </button>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Client Side</h2>
          <p className="text-gray-600">
            Create beautiful and responsive UIs with Tailwind CSS in your React components. Styling has never been easier!
          </p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">
            Explore UI
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
