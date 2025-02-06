import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-500">Server Side</h2>
          <p className="text-md text-gray-600 mt-2">Bun runs your backend APIs super fast!</p>
          <code className="block bg-gray-200 p-2 rounded mt-4">GET /api/users</code>
        </div>
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-purple-500">Client Side</h2>
          <p className="text-md text-gray-600 mt-2">With React, you're just a few lines away from a responsive app.</p>
          <code className="block bg-gray-200 p-2 rounded mt-4">const users = await fetch("/api/users");</code>
        </div>
      </div>

      <footer className="mt-12">
        <p className="text-sm text-gray-500">Built with ❤️ using Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
