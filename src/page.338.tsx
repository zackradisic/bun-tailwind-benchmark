import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Welcome to My Fullstack App
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a demo showcasing Bun's Tailwind integration!
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
      <div className="mt-8 p-6 max-w-md bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          API Response:
        </h2>
        <div className="p-4 border border-gray-200 rounded">
          {/* Fetch and display API data here */}
        </div>
      </div>
    </div>
  );
};

export default App;
