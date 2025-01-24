import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="p-10 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to Bun</h1>
        <p className="mt-4 text-center text-gray-600">
          Discover how quick and easy it is to build fullstack applications with 
          <span className="font-semibold text-indigo-600"> Bun</span>, 
          <span className="font-semibold text-indigo-600"> React</span>, and 
          <span className="font-semibold text-indigo-600"> TypeScript</span>.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-none">
            Get Started
          </button>
        </div>
        <h2 className="mt-10 text-2xl font-semibold text-gray-800">API Data:</h2>
        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
          <pre className="text-sm text-gray-700">
            {JSON.stringify({ message: "Hello from the API!"}, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
