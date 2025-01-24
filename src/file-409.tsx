import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a fast and simple fullstack app using Bun, React, and TypeScript!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center justify-center p-5 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Client Side!</h2>
        </div>
        <div className="flex items-center justify-center p-5 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-red-500">Server Side!</h2>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200">
        Click Me!
      </button>
    </div>
  );
}

export default App;
