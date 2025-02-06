import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center p-5 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Bun!</h1>
        <p className="text-lg text-gray-600 mb-6">This is a fullstack application using Bun with Tailwind CSS.</p>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 transition">
          Click Me!
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Response:</h2>
          <div className="p-4 border border-gray-300 rounded">
            <pre className="text-sm text-gray-600">
              {JSON.stringify({ message: "Hello from Bun's server!" }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
