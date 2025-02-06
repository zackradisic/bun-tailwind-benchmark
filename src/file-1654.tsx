import "./style.css";
// App.tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <header className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Welcome to Bun + React!</h1>
      </header>
      <main className="mt-10 p-4 bg-white shadow-md rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold border-b pb-2">Key Features:</h2>
        <ul className="mt-4 list-disc list-inside">
          <li className="py-1">🚀 Instant Server & Client Rendering</li>
          <li className="py-1">🧩 Seamless API Requests</li>
          <li className="py-1">🎨 Tailwind CSS for Rapid UI Development</li>
        </ul>
        <div className="flex justify-center mt-6">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Get Started
          </button>
        </div>
      </main>
      <footer className="mt-10 text-sm text-gray-600">
        Built with 💙 using Bun, React, and Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
