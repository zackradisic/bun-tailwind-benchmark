import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a demo application showcasing Bun's capabilities.</p>
      <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-400 transition duration-300">
        Click Me
      </button>
      <div className="mt-8">
        <p className="text-sm text-gray-500">Check the console for server logs!</p>
      </div>
    </div>
  );
};

export default App;
