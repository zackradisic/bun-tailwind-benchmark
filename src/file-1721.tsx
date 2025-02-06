import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow-md w-full p-4">
        <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to Bun with Tailwind</h1>
      </header>
      <main className="flex flex-col items-center p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Build Fullstack Apps with Ease</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Click Me!
        </button>

        <div className="mt-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
          <p className="text-gray-700">This is a simple example showing how fast and easy it is to integrate Tailwind CSS with Bun.</p>
          <ul className="mt-4 list-disc list-inside">
            <li className="mb-1">🚀 Quick setup with Bun's server.</li>
            <li className="mb-1">🧩 Easy integration of React & TypeScript.</li>
            <li className="mb-1">📦 Bundling done automatically.</li>
          </ul>
        </div>
      </main>
      <footer className="w-full p-4 bg-gray-200 text-center">
        <p className="text-gray-600">Powered by Bun</p>
      </footer>
    </div>
  );
};

export default App;
