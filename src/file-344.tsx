import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</header>
      <main className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Get Started with Bun</h1>
        <p className="text-gray-600 mb-4">
          This is a demo of a fullstack application using Bun with React and TypeScript.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
        <div className="mt-4">
          <p className="text-sm text-gray-500">API Response:</p>
          <pre className="bg-gray-200 p-2 rounded">
            {JSON.stringify({ message: "Hello from Bun's API!" }, null, 2)}
          </pre>
        </div>
      </main>
    </div>
  );
};

export default App;
