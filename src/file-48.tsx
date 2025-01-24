import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack application built with Bun, React, and TypeScript!</p>
      <button className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition duration-300 focus:outline-none">
        Click Me!
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <pre className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mt-2 overflow-auto">
          {JSON.stringify({ message: "Hello from Bun's server!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
