import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">Building fullstack applications has never been easier.</p>
      <div className="mt-10 bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800">Quick Start</h2>
        <ul className="mt-4 list-disc list-inside space-y-2">
          <li className="text-lg text-gray-600">✨ Fast setup with Bun and Tailwind integration.</li>
          <li className="text-lg text-gray-600">⚡️ Combines frontend and backend seamlessly.</li>
          <li className="text-lg text-gray-600">🚀 Enjoy a smooth development experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
