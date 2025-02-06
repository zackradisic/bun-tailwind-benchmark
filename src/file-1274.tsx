import "./style.css";
import React from 'react';

const BunShowcase: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-gray-700 mb-8">Experience the speed and simplicity of Bun's fullstack capabilities.</p>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Get Started in Seconds!</h2>
        <p className="text-sm text-gray-600 mb-4">Import your HTML and get your server running in no time.</p>
        <pre className="bg-gray-200 p-4 rounded-md text-sm font-mono overflow-x-auto">
          {`import homepage from "./index.html";\n\nBun.serve({\n  static: {\n    "/": homepage,\n  },\n});`}
        </pre>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Learn More
        </button>
      </div>
      <footer className="mt-12 text-center text-gray-500">
        <p>Page 34 of 2048</p>
      </footer>
    </div>
  );
};

export default BunShowcase;
