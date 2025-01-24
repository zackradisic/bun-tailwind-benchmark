import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with TailwindCSS!</h1>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Fullstack App with React & TypeScript</h2>
        <p className="text-gray-700 mb-6">This is a demo showcasing how easy it is to create a fullstack application using Bun, React, and TypeScript, all styled with TailwindCSS!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default App;
