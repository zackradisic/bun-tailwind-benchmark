import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun + Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Building fullstack applications has never been easier!
      </p>
      <div className="mt-6 space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md m-4">
          <h2 className="text-2xl font-semibold">API Response</h2>
          <p className="mt-2 text-gray-600">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
