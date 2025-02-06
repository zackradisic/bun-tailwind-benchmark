import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack application built with React, TypeScript, and Bun!
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-indigo-600">Server Side</h2>
          <p className="text-gray-600">Handle API requests and serve pages easily.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ease-in-out duration-300">
          <h2 className="text-2xl font-semibold text-green-600">Client Side</h2>
          <p className="text-gray-600">React components rendered with Tailwind styling.</p>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-500">
        <p>Powered by Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
