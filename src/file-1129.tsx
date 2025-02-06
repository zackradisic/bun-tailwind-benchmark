import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fullstack app using Bun with React and TypeScript!</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition">
        Click Me!
      </button>
      <div className="mt-10 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-2">Data from the Server:</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">User 1</li>
          <li className="text-gray-600">User 2</li>
          <li className="text-gray-600">User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
