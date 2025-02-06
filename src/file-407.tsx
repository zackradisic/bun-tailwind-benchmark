import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
          <p className="text-gray-700 text-base mb-6">
            This is a demo application showcasing how to use Bun's new Tailwind integration seamlessly in your fullstack apps.
          </p>
          <div className="flex justify-between mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Get Started</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">Learn More</button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Bun. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Server Response</h2>
        <div className="bg-gray-200 p-4 rounded-lg shadow-inner">
          <p className="text-gray-600">Fetching data from server...</p>
          {/* Simulating fetch with a static response */}
          <div className="mt-2 text-sm text-gray-700">
            {JSON.stringify({ message: "Hello from Bun's server!" })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
