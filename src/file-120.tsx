import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Bun & Tailwind App!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack app powered by Bun, React, and TypeScript!
      </p>
      <button className="px-6 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600 transition duration-200">
        Click Me!
      </button>
      <div className="mt-8 p-4 border border-gray-300 rounded shadow">
        <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
        <pre className="mt-2 text-sm text-gray-600">
          {/* Here you would map through your API data */}
          {JSON.stringify({ message: "Sample API Response" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
