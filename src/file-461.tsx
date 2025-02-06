import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        Welcome to Bun + TailwindCSS!
      </h1>
      <p className="text-lg text-gray-700 mb-3">
        This is a demo showcasing the power of Bun with React and TypeScript.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        Click me!
      </button>
      <div className="mt-10 flex space-x-4">
        <div className="p-5 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Server Response</h2>
          <pre className="mt-2 text-sm text-gray-600">
            {JSON.stringify({ message: "Hello from the server!" }, null, 2)}
          </pre>
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Client Interaction</h2>
          <p className="mt-2 text-sm text-gray-600">You can modify this!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
