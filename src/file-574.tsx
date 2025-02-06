import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-10 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind CSS!</h1>
        <p className="text-gray-700 mb-6">Building fullstack applications has never been easier.</p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">API Response</h2>
          <pre className="bg-gray-200 p-4 rounded-lg mt-2">
            {/* Simulating API response display */}
            {`{ "message": "Hello from Bun API!" }`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
