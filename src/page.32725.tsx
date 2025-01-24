import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to Bun with Tailwind!
      </h1>
      <p className="text-lg text-white mb-8">
        This is a fullstack application demonstrating Bun's capabilities with
        React and TypeScript.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
          Client Side Action
        </button>
        <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
          Server Side Action
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white">API Data:</h2>
        <div className="bg-white p-4 rounded-md shadow-lg mt-2">
          <pre className="text-black">
            {/* Example JSON data will be displayed here */}
            {JSON.stringify({ message: "Hello from Bun!" }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
