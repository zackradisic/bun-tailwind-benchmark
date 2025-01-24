import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-base mb-6">
          This is a simple example of how fast and easy it is to build fullstack applications using Bun, React, and TypeScript.
        </p>
        <div className="flex justify-center">
          <button
            className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
            onClick={async () => {
              const response = await fetch('/api/users');
              const users = await response.json();
              console.log(users);
            }}
          >
            Fetch Users
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Users List:</h2>
          <ul className="list-disc pl-5">
            {/* This is where the fetched users will be displayed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
