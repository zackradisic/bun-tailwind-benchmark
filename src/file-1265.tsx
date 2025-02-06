import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Welcome to Bun with Tailwind!
      </h1>
      <p className="mt-4 text-xl text-white">
        Building fullstack applications has never been easier.
      </p>
      <div className="flex flex-wrap mt-8">
        <div className="m-4 p-6 bg-white rounded-lg shadow-lg max-w-xs animate-bounce">
          <h2 className="text-2xl font-semibold text-center">Client</h2>
          <p className="mt-2 text-gray-700">
            Quick client-side rendering with zero configuration.
          </p>
        </div>
        <div className="m-4 p-6 bg-white rounded-lg shadow-lg max-w-xs animate-bounce">
          <h2 className="text-2xl font-semibold text-center">Server</h2>
          <p className="mt-2 text-gray-700">
            Effortless API and server setup with Bun's powerful backend.
          </p>
        </div>
      </div>
      <a
        href="#"
        className="mt-6 px-4 py-2 bg-white text-blue-500 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Get Started
      </a>
    </div>
  );
};

export default App;
