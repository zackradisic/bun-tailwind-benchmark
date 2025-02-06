import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out">
        Click Me
      </button>
      <div className="mt-5 flex flex-wrap justify-center">
        <div className="m-3 p-5 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-gray-800">Server Response</h2>
          <p className="mt-2 text-gray-600">Fetching data from the server...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
