import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demo showcasing the seamless integration of Tailwind CSS with Bun.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">React components styled with Tailwind are rendered here.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-red-500">Server Side</h2>
          <p className="text-gray-600">API requests are handled effortlessly on the server.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-purple-500">Fullstack Capabilities</h2>
          <p className="text-gray-600">Bun handles routing and bundling of assets with ease.</p>
        </div>
      </div>
      <footer className="mt-8 text-center">
        <p className="text-sm text-gray-500">Built with 🛠️ Bun + React + Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
