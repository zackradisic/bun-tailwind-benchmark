import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
        Click Me
      </button>
      <div className="mt-10 p-5 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <pre className="mt-2 text-left text-gray-600 bg-gray-100 p-4 rounded">
          {JSON.stringify({ message: "Hello from the Bun API!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
