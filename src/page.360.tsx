import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700">
        This is a fullstack application showcasing the speed and simplicity of using Bun with React and TypeScript.
      </p>
      <button className="mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
        Click Me
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
        <div className="border border-gray-300 rounded p-4 mt-2">
          {/* Fetching and rendering data from the Bun API */}
          {/* Example static response for demo purposes */}
          <pre className="text-sm">
            {JSON.stringify({ users: [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }] }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
