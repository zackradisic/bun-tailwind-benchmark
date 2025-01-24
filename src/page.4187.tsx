import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to Bun with TailwindCSS!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack application showcasing how fast and easy it is to use Bun with React and TypeScript.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p className="text-gray-600">Render your React components with TailwindCSS styling.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p className="text-gray-600">Handle API requests seamlessly with Bun’s built-in capabilities.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
};

export default App;
