import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-4">This is a simple fullstack application using Bun's new Tailwind integration!</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          onClick={async () => {
            const response = await fetch("/api/example");
            const data = await response.json();
            alert(JSON.stringify(data));
          }}
        >
          Fetch Data
        </button>
      </div>
    </div>
  );
};

export default App;
