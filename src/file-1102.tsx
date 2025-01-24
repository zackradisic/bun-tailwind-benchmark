import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to Bun with Tailwind!</h1>
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Fullstack App Powered by Bun</h2>
        <p className="text-gray-700 mb-4">
          This is a simple demonstration of Bun's integration with Tailwind CSS. 
          With Bun, we can easily serve our API and static files together without extra configuration.
        </p>
        <a href="/api/users" className="text-white bg-blue-500 hover:bg-blue-700 rounded px-4 py-2">
          Fetch Users
        </a>
      </div>
    </div>
  );
};

export default App;
