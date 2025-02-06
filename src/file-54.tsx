import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack application example using Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="bg-white p-5 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Client-side Component</h2>
          <p className="text-gray-600">This section showcases the client’s interaction with the UI.</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Click Me!
          </button>
        </div>
        <div className="bg-white p-5 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-red-500">Server-side Integration</h2>
          <p className="text-gray-600">This section demonstrates server functionality alongside client components.</p>
          <p className="mt-2 text-sm text-gray-500">Fetching data from API...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
