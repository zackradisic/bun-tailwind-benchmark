import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">Welcome to Bun & Tailwind</h1>
      <p className="text-xl text-gray-700 mb-6">This is a fullstack application using React and TypeScript with Bun!</p>
      <button
        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        onClick={async () => {
          const response = await fetch("/api/users");
          const users = await response.json();
          console.log(users);
        }}
      >
        Fetch Users
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Users:</h2>
        <ul id="user-list" className="mt-4 space-y-2">
          {/* User list will be populated here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
