import React from 'react';

const MyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
        Click Me!
      </button>
      <footer className="mt-10 text-gray-500">
        <p className="text-sm">Powered by Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default MyComponent;
