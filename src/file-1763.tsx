import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Welcome to Bun with TailwindCSS!
        </h1>
        <p className="text-gray-700 mb-4">
          This is a simple demonstration of how to build fullstack applications
          with Bun, React, and TypeScript.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Server Response:</h2>
          <div className="p-4 mt-2 bg-gray-200 border border-gray-300 rounded">
            <pre className="whitespace-pre-wrap">
              {/* This area will be updated with the response from the server dynamically */}
              {`
                Fetching data from the server...
              `}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
