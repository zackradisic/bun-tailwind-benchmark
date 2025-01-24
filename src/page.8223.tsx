import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a fullstack application built with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-500">Client Side Rendering</h2>
          <p className="text-gray-600 mt-2">
            React components are effortlessly rendered using Bun's fast bundler.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-purple-500">Server Side Rendering</h2>
          <p className="text-gray-600 mt-2">
            API responses are handled swiftly as requests are made to the Bun server.
          </p>
        </div>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Fetch Users
      </button>
    </div>
  );
};

export default App;
