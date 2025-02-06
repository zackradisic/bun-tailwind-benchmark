import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun + Tailwind</h1>
      <p className="mt-4 text-lg text-gray-600">This is a fullstack application using Bun as a server and React with TypeScript for the client!</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-green-500">Fast Development</h2>
          <p className="text-gray-700">Enjoy rapid feedback and hot reloading capabilities while developing your application.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-purple-500">Seamless Integration</h2>
          <p className="text-gray-700">Bun's fullstack capabilities make integrating APIs and frontend seamless and straightforward.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-red-500">Rich Ecosystem</h2>
          <p className="text-gray-700">Leverage the power of TailwindCSS with Bun to create stunning UIs effortlessly!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
