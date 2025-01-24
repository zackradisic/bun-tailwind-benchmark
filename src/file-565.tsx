import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Bun with TailwindCSS!</h1>
      <p className="mt-4 text-lg text-gray-600">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="mt-6 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800">Let's get started!</h2>
        <ul className="mt-4 list-disc list-inside">
          <li className="mt-2">🔹 Fast API responses</li>
          <li className="mt-2">🔹 Server and client-side rendering</li>
          <li className="mt-2">🔹 Simple TailwindCSS integration</li>
        </ul>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-500">
        Bun Fullstack Demo
      </footer>
    </div>
  );
};

export default App;
