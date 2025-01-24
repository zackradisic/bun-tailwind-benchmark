import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demo of Bun's fullstack capabilities with React and TypeScript.
      </p>
      <div className="space-y-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Client Side Button
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
          Server Side Action
        </button>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <div className="bg-white border border-gray-300 rounded p-4 mt-2">
          <pre className="text-sm text-gray-600">{"Fetching data from server..."}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
