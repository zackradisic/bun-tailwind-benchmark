import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun + Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack apps has never been easier!</p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
        <span className="inline-block bg-green-200 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Fast</span>
        <span className="inline-block bg-yellow-200 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded ml-2">Simple</span>
        <span className="inline-block bg-red-200 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded ml-2">Fullstack</span>
        <p className="mt-4 text-gray-600">With Bun's new support for Tailwind, you can focus on your code without worrying about the setup!</p>
      </div>
      <div className="mt-8">
        <a
          href="/api/users"
          className="inline-flex items-center px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Fetch Users
        </a>
      </div>
    </div>
  );
};

export default App;
