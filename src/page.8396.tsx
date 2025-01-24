import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demonstration of using Bun&apos;s fullstack capabilities with React and TypeScript.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Click Me
      </button>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <div className="mt-2 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
          <p className="text-gray-600">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
