import "./style.css";
import React from "react";

const MyApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to My App!</h1>
        <p className="text-gray-700 text-base text-center mb-6">
          This is a simple application built with Bun, React, TypeScript, and TailwindCSS.
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Get Started
        </button>
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800">Server Response:</h2>
          <div id="server-response" className="bg-gray-200 p-2 rounded mt-2">
            <p className="text-gray-600">Fetching data from the server...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApp;
