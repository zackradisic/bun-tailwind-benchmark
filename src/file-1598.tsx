import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700">Building fullstack applications has never been easier.</p>
      <div className="mt-6 p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-green-500">API Response:</h2>
        <div className="mt-2 p-2 bg-gray-200 rounded">
          <pre className="text-gray-800">
            {JSON.stringify({ message: "Hello from the server!" }, null, 2)}
          </pre>
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => alert("Button Clicked!")}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
