import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4">Sunny Dashboard</h2>
        <ul className="list-disc ml-5 text-gray-600">
          <li className="mb-2">⚡ Fast development with Bun's built-in server.</li>
          <li className="mb-2">🌈 Use TailwindCSS for rapid UI development.</li>
          <li className="mb-2">🚀 Fullstack capabilities integrating backend APIs seamlessly.</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
