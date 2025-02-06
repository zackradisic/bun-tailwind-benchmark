import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-white mb-4">
        Experience the speed and simplicity of building fullstack applications.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Client-Server Interaction</h2>
        <div className="flex flex-col space-y-4">
          <button 
            className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200" 
            onClick={async () => {
              const response = await fetch("/api/users");
              const data = await response.json();
              console.log(data);
            }}>
            Fetch Users
          </button>
          <p className="text-gray-700">Check the console for the fetched users!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
