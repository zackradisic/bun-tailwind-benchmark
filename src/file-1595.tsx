import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun + Tailwind!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is an example of a fullstack application using Bun with React and TypeScript.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
        Click Me!
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">API Response:</h2>
        <div id="api-data" className="mt-4 p-4 bg-white rounded-lg shadow">
          {/* API data will be inserted here */}
        </div>
      </div>
    </div>
  );
};

export default App;
