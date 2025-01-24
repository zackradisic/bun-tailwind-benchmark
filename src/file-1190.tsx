import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a fullstack application built using Bun, React, and TypeScript.
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
        Get Started
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">API Data</h2>
        <ul className="list-disc list-inside p-4 bg-white rounded-lg shadow-md">
          <li className="py-2">User: John Doe</li>
          <li className="py-2">Email: john@example.com</li>
          <li className="py-2">Role: Admin</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
