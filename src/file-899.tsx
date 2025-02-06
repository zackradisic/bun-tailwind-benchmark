import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-10">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-5">Bun makes building fullstack apps simple and fast.</p>
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">API Fetch Example</h2>
        <button 
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={async () => {
            const response = await fetch("/api/users");
            const data = await response.json();
            console.log(data);
          }}
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
