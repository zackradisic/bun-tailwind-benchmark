import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to My Bun App</h1>
      <p className="text-xl text-gray-600 mb-6">Serving frontend and backend with ease!</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Data from Server:</h2>
        <div className="bg-white shadow-md rounded-lg p-4 mt-2">
          {/* Fetch data from the server */}
          {/* This section will display fetched data */}
        </div>
      </div>
    </div>
  );
};

export default App;
