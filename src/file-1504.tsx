import "./style.css";
import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
          Client Side Action
        </button>
        <button className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition">
          Server Side Action
        </button>
      </div>
      <footer className="mt-8 text-sm text-gray-500">
        <p className="mb-2">Try out Bun's fullstack capabilities with Tailwind CSS!</p>
        <p>API Endpoint: <span className="text-blue-500">/api/users</span></p>
      </footer>
    </div>
  );
};

export default MyComponent;
