import React from 'react';

// Create a functional component to showcase Bun with Tailwind integration
const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <h1 className="text-6xl font-bold text-white mb-4">Welcome to Bun with Tailwind CSS!</h1>
      <p className="text-2xl text-gray-200 mb-8">
        🚀 Build fast, fullstack applications with ease.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="px-6 py-2 font-bold text-white bg-teal-600 rounded hover:bg-teal-700 transition">
          Learn More
        </button>
      </div>
      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-800">API Endpoints</h2>
        <p className="text-gray-700">Check out our amazing API:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {`GET /api/users - Fetch all users`}
        </pre>
      </div>
    </div>
  );
};

export default App;
