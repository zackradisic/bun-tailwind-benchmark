import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is an amazing fullstack application built with React, TypeScript, and fast as lightning using Bun!
      </p>
      <div className="space-x-4">
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700">
          Client Action
        </button>
        <button className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded shadow hover:bg-gray-400">
          Server Action
        </button>
      </div>
      <footer className="mt-8">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
