import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg mb-6">
        This is a demonstration of using Bun's fullstack capabilities with React and Tailwind CSS.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
    </div>
  );
};

export default App;
