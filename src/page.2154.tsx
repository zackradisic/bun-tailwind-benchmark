import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demonstration of a fullstack application using Bun, React, and Tailwind CSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-500">Server-Side Rendering</h2>
          <p className="text-gray-600 mt-2">
            API data fetched directly from the server using Bun's built-in HTTP server capabilities.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors duration-200">
            Fetch Users
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-purple-600">Client-Side Rendering</h2>
          <p className="text-gray-600 mt-2">
            Quickly update the UI with responsive Tailwind CSS classes.
          </p>
          <button className="mt-4 px-4 py-2 bg-purple-400 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors duration-200">
            Refresh View
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
