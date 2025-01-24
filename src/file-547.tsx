import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + TailwindCSS</h1>
      <p className="text-lg text-gray-700 mb-10">
        Experience how fast and simple it is to build fullstack applications with Bun!
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-3/4">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Quick Setup</h2>
        <p className="text-gray-600 mb-4">
          Import your HTML and run your frontend with just a few lines of code.
        </p>
        <code className="bg-gray-200 rounded p-2 text-sm">
          {`
import homepage from "./index.html";
Bun.serve({
  static: {
    "/": homepage,
  },
});
`}
        </code>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
        Get Started
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
