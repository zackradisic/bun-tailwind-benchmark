import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple fullstack application demonstrating Bun's server and client capabilities using React and TypeScript.
      </p>
      <div className="space-y-4">
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
          Fetch Users
        </button>
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition">
          Submit Data
        </button>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-500">
        &copy; 2023 Your Company
      </footer>
    </div>
  );
};

export default App;
