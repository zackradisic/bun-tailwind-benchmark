import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Bun with TailwindCSS!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Experience the speed of building fullstack applications with React, TypeScript, and Bun.
        </p>
        <a
          href="/api/users"
          className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300"
        >
          Fetch Users
        </a>
      </div>
    </div>
  );
};

export default App;
