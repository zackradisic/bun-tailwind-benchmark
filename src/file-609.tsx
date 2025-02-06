import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 w-full text-center">
        <h1 className="text-3xl font-bold">Welcome to My Bun + Tailwind App</h1>
      </header>
      <main className="flex flex-col items-center mt-8 space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-blue-600">Hello Bun!</h2>
          <p className="text-gray-700">
            This is a simple fullstack app demonstrating Bun's amazing performance and ease of use with React and TypeScript.
          </p>
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Click Me
        </button>
        <div className="flex space-x-4">
          <a href="/api/users" className="text-blue-500 hover:underline">
            Fetch Users API
          </a>
          <a href="/dashboard" className="text-blue-500 hover:underline">
            Go to Dashboard
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
