import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fast and simple fullstack application built with Bun, React, and TypeScript.
      </p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
      <footer className="mt-10 text-gray-500 text-sm">
        <p>Server Response:</p>
        <div className="bg-white p-4 shadow rounded mt-2">
          <pre className="text-xs">
            {JSON.stringify({ message: "Hello from the Bun server!" }, null, 2)}
          </pre>
        </div>
      </footer>
    </div>
  );
};

export default App;
