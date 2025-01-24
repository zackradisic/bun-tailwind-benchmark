import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-4">
        Welcome to Bun with TailwindCSS
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        This is a demo of a fullstack application using Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p className="text-gray-600">
            The client-side code leverages Tailwind's utility-first classes to style components quickly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p className="text-gray-600">
            The server can handle API requests and serve static files easily, integrating all seamlessly with Bun.
          </p>
        </div>
      </div>
      <footer className="mt-8 text-gray-300">
        <p>© {new Date().getFullYear()} Bun + Tailwind Integration Demo</p>
      </footer>
    </div>
  );
};

export default App;
