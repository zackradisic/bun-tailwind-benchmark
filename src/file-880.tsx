import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun!</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a fullstack application powered by Bun, React, and TypeScript.
      </p>
      <div className="flex flex-wrap justify-center mt-8">
        <div className="max-w-sm p-6 m-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-500">API Endpoint</h2>
          <p className="mt-2 text-gray-600">
            Call your API seamlessly: <code className="font-mono">/api/users</code>
          </p>
        </div>
        <div className="max-w-sm p-6 m-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-500">Static Routes</h2>
          <p className="mt-2 text-gray-600">Serve your HTML and bundles without hassle!</p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-gray-500">Built with ❤️ using Bun</p>
      </footer>
    </div>
  );
};

export default App;
