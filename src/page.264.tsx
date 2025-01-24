import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Bun & Tailwind Showcase</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">
        Get Started
      </button>
      <div className="mt-8 space-y-4">
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-2xl font-semibold">Client-Side Rendering</h2>
          <p className="text-gray-600">Using React for an interactive UI powered by TypeScript.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-2xl font-semibold">Server-Side API</h2>
          <p className="text-gray-600">Bun serves our API requests seamlessly!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
