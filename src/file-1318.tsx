import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the speed of Bun while building fullstack applications!
      </p>
      <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-400 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <p className="text-gray-600">Fetching data from server...</p>
          {/* You can call your API here and display results */}
        </div>
      </div>
    </div>
  );
};

export default App;
