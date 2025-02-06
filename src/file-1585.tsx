import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">Fullstack Development Made Simple</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
          Fetch Data
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition">
          Dashboard
        </button>
      </div>
      <div className="mt-10 p-4 border border-gray-300 rounded bg-white shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">API Response:</h2>
        <pre className="mt-2 p-2 border border-gray-200 rounded bg-gray-50 text-gray-600">
          {JSON.stringify({ message: "Hello from Bun's backend!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
