import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 text-center">
        <h1 className="text-4xl font-extrabold">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Fast Fullstack Development</h2>
        <p className="text-gray-700 mb-6">With Bun, you can easily integrate Tailwind CSS into your fullstack applications!</p>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-200">
          Get Started
        </button>
        <div className="mt-8 space-y-4">
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="font-bold">Server-side JSX Rendering</h3>
            <p className="text-sm text-gray-600">Efficiently render client components from the server using Bun's built-in support!</p>
          </div>
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="font-bold">API Call Example</h3>
            <p className="text-sm text-gray-600">Easily fetch data using your Bun API methods alongside React!</p>
          </div>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-500">&copy; 2023 Bun & Tailwind Integration</p>
      </footer>
    </div>
  );
};

export default App;
