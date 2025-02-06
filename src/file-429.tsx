import "./style.css";
import React from "react";

const BunExample: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
        Build Fast with Bun!
      </h1>
      <p className="text-xl text-white mb-8">
        Experience the simplicity of fullstack development.
      </p>
      <div className="flex flex-wrap justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-lg">
          Get Started
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-lg ml-4">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-6 border border-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white">Why Bun?</h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>Fast development cycles</li>
          <li>Seamless integration with frontend and backend</li>
          <li>Tailwind CSS support out of the box</li>
        </ul>
      </div>
    </div>
  );
};

export default BunExample;
