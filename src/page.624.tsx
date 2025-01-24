import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 p-10">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-gray-600 text-center mb-4">
          This is a simple demonstration of using Bun's backend capabilities alongside a beautiful Tailwind-styled frontend.
        </p>
        <div className="flex items-center justify-between mt-5">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
          <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-200">
            Learn More
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">API Data:</h2>
          <div className="mt-2 p-4 bg-gray-100 border border-gray-200 rounded">
            {/* Fetch data from the Bun API */}
            <pre className="text-sm text-gray-600">{"// Data will be displayed here"}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
