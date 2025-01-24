import React from "react";

const FastApp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun & Tailwind</h1>
        <p className="text-lg text-gray-700">Building fullstack applications has never been this fast!</p>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800">Client & Server in One</h2>
          <p className="text-gray-600 mt-2">This component showcases a seamless integration of React, TypeScript, and Bun's server.</p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-400 transition">
              Click Me!
            </button>
          </div>
        </div>
      </main>
      <footer className="py-4">
        <p className="text-gray-600">Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default FastApp;
