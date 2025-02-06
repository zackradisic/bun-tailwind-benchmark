import "./style.css";
import React from "react";

const BunDemoComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Bun!</h1>
      <p className="text-xl mb-4">Building fullstack applications has never been easier.</p>
      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition ease-in-out duration-300">
        Get Started
      </button>
      <div className="mt-10 p-5 bg-white bg-opacity-25 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside mt-4">
          <li className="mt-2">⚡ Fast development cycles</li>
          <li className="mt-2">⚡ Simple API routes</li>
          <li className="mt-2">⚡ Powerful integration with TailwindCSS</li>
        </ul>
      </div>
    </div>
  );
};

export default BunDemoComponent;
