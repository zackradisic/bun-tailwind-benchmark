import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + React!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been this easy.</p>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-3">Fetch User Data</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            const response = await fetch("/api/users");
            const data = await response.json();
            alert(JSON.stringify(data));
          }}
        >
          Load Users
        </button>
      </div>
    </div>
  );
};

export default App;
