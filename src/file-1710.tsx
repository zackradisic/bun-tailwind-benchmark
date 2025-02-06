import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold underline text-blue-600 mb-4">
        Fast Fullstack with Bun & Tailwind
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple application showcasing Bun's speed and ease of use in building fullstack apps with React and TypeScript!
      </p>
      <div className="flex flex-row space-x-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Client Action
        </button>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Server Action
        </button>
      </div>
      <iframe
        src="/dashboard"
        title="Dashboard"
        className="mt-8 w-full h-64 border-2 border-gray-300 rounded"
      ></iframe>
    </div>
  );
};

export default App;
