import React from "react";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo of a fullstack application using Bun, React, and Tailwind CSS.</p>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Server Request
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Client Action
        </button>
      </div>
      <div className="mt-10 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Data from Server:</h2>
        <p className="text-gray-600">Here we will display data fetched from Bun's backend API.</p>
        {/* Fetch and display data here */}
      </div>
    </div>
  );
};

export default App;
