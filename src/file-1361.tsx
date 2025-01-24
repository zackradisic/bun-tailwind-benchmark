// src/App.tsx
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <header className="mb-5">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Bun App!</h1>
        <p className="mt-2 text-lg text-gray-700">Fast and Simple Fullstack Development with Bun</p>
      </header>
      <main className="flex flex-wrap justify-around w-full">
        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-3">Client Side</h2>
            <p className="text-gray-600">Rendered with React and TypeScript.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Click Me!
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-3">Server Side</h2>
            <p className="text-gray-600">Handled API requests seamlessly.</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Fetch Data
            </button>
          </div>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-sm text-gray-500">&copy; 2023 Bun Developer</p>
      </footer>
    </div>
  );
};

export default App;
