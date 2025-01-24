import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using React, TypeScript, and Bun.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Part</h2>
          <p className="text-gray-600">Use Bun's powerful server capabilities to handle API requests.</p>
          <code className="block mt-2 bg-gray-200 p-2 rounded">Bun.serve({...})</code>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Part</h2>
          <p className="text-gray-600">Easily create dynamic UIs with React.</p>
          <code className="block mt-2 bg-gray-200 p-2 rounded">import { App } from "./app";</code>
        </div>
      </div>
    </div>
  );
};

export default App;
