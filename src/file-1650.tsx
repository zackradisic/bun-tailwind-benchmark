import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Bun Fullstack App!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demonstration of Bun's capabilities with Tailwind CSS.
      </p>
      <button className="px-6 py-3 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded-lg shadow-md transition duration-300 ease-in-out">
        Click Me!
      </button>
      <div className="mt-10 space-x-4">
        <a
          href="/api/users"
          className="px-4 py-2 text-white bg-green-500 hover:bg-green-700 rounded"
          onClick={async (e) => {
            e.preventDefault();
            const response = await fetch('/api/users');
            const data = await response.json();
            console.log(data);
          }}
        >
          Get Users
        </a>
        <a
          href="/dashboard"
          className="px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default App;
