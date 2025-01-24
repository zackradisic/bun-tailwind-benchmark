import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Bun!</h1>
        <p className="text-gray-600 mb-4">
          This is a simple example showcasing Bun's fast fullstack development with React & TypeScript.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Click Me!
        </button>
        <div className="mt-4">
          <p className="text-gray-500">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
