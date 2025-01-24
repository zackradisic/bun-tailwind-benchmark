import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-5xl font-bold text-white mb-5">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-white mb-10">Building fullstack apps has never been this easy.</p>
      <div className="w-full max-w-lg p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-3">API Response:</h2>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
          {JSON.stringify({ message: "Hello World from Bun's API!" }, null, 2)}
        </pre>
      </div>
      <button className="mt-5 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
    </div>
  );
};

export default App;
