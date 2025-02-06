import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-xl text-white mb-8">Building fullstack apps has never been easier.</p>
      <div className="flex space-x-4">
        <button className="px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Get Started
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600">API Response</h2>
        <pre className="mt-2 text-sm text-gray-700">
          {`{
  "message": "Hello from Bun!",
  "status": "success"
}`}
        </pre>
      </div>
    </div>
  );
};

export default App;
