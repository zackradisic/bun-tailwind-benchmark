import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bun + React + TypeScript</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">Client-Side Rendering</h2>
          <p className="text-gray-700">
            This section highlights the fast and simple client-side rendering capabilities of Bun with Tailwind.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">Server-Side Rendering</h2>
          <p className="text-gray-700">
            Bun handles server-side rendering seamlessly, making it a breeze to fetch data.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">API Integration</h2>
          <p className="text-gray-700">
            Quickly set up API endpoints to serve data to your components with Bun's built-in features.
          </p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-gray-600">Built with ❤️ using Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
