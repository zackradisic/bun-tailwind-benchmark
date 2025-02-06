import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Bun App!</h1>
      <p className="mt-4 text-lg text-gray-700">Fast, simple, and fullstack with Bun, React & TypeScript.</p>
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-600">Client Component</h2>
          <p className="mt-2 text-gray-600">This component showcases Bun's amazing speed!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-orange-600">Server API</h2>
          <p className="mt-2 text-gray-600">Easily handle requests with Bun's fetch API.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-purple-600">Fullstack Magic</h2>
          <p className="mt-2 text-gray-600">Combine server and client with Bun in one go!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
