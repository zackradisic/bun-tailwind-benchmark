import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a simple fullstack app built with React & TypeScript</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition">
        Click Me!
      </button>
      <div className="mt-10 p-6 bg-white rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <pre className="mt-2 p-4 bg-gray-200 rounded">Fetching data from server...</pre>
      </div>
    </div>
  );
};

export default App;
