import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        With Bun's new Tailwind integration, building fullstack applications has never been easier!
      </p>
      <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
        Click Me
      </button>
      <div className="mt-10 p-6 border border-gray-300 rounded-lg">
        <h2 className="text-3xl font-bold text-indigo-600">Server Response:</h2>
        <pre className="bg-gray-200 p-4 rounded-lg">
          {JSON.stringify({ message: "Data fetched successfully!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
