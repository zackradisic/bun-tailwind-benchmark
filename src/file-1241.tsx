import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demonstration of a fullstack application built with Bun, React, and TypeScript.
      </p>
      <button className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring">
        Click Me!
      </button>
      <div className="mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Server Response:</h2>
        <pre className="bg-gray-200 p-3 rounded-md">
          {JSON.stringify({ message: "Hello from Bun's server!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
