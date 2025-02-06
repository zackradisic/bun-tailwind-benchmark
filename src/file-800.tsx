import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Welcome to Bun with TailwindCSS!
      </h1>
      <p className="text-lg mb-8 text-gray-700">
        This is a demo showing how fast and simple it is to build fullstack applications using Bun.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Client</h2>
          <p className="text-gray-600 mt-2">
            This section demonstrates the client-side powered by React.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Server</h2>
          <p className="text-gray-600 mt-2">
            This section showcases the server handling API requests efficiently.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Integration</h2>
          <p className="text-gray-600 mt-2">
            Seamless integration with Tailwind ensures styling is a breeze.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
