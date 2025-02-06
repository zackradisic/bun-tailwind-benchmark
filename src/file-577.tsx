import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo of fullstack development with Bun, React, and TypeScript.</p>
      <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8 p-4 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-2">API Call Example</h2>
        <button
          onClick={async () => {
            const response = await fetch('/api/users');
            const users = await response.json();
            alert(JSON.stringify(users));
          }}
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition duration-300"
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
