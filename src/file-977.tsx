import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Our App</h1>
      <p className="text-lg text-gray-700 mb-8">Bun + React + TypeScript with TailwindCSS</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">Feature 1</h2>
          <p className="mt-2 text-gray-600">Quick and responsive UI with Tailwind.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">Feature 2</h2>
          <p className="mt-2 text-gray-600">Develop fullstack apps effortlessly with Bun.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">Feature 3</h2>
          <p className="mt-2 text-gray-600">Seamless integration of frontend and backend.</p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-gray-500">Built with Bun, React, and TypeScript.</p>
      </footer>
    </div>
  );
};

export default App;
