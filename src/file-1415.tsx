import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Bun with TailwindCSS</h1>
      <p className="text-lg text-gray-600 mb-8">
        Deployed with an ultra-fast fullstack setup using Bun!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Client Side</h2>
          <p className="text-gray-700">
            This section renders dynamically with React, bringing you a seamless experience.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Server Side</h2>
          <p className="text-gray-700">
            API integration and handling requests have never been this straightforward with Bun.
          </p>
        </div>
      </div>
      <a
        href="/api/users"
        className="mt-6 text-lg font-medium text-blue-500 hover:underline"
      >
        Fetch Users from API
      </a>
    </div>
  );
};

export default App;
