import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg mb-8 text-gray-700">
        This is a demo of how simple it is to build fullstack applications with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-500">Client Component</h2>
          <p className="mt-2 text-gray-600">
            This section showcases the client-side functionality of the app. You can easily use Tailwind CSS to style your components.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-red-500">Server API</h2>
          <p className="mt-2 text-gray-600">
            Here, you can create API endpoints using Bun without any additional configuration.
          </p>
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-500">
        <p>Built with ❤️ using Bun, React, TypeScript, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
