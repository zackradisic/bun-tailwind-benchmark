import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="text-3xl font-bold mb-4 text-blue-600">
        Welcome to Bun + TailwindCSS
      </header>
      <main className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Simple, Fast, and Fullstack!</h2>
        <p className="text-gray-700 mb-4">
          With Bun's new Tailwind integration, building fullstack apps with React and TypeScript is a breeze!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-300 rounded-lg bg-blue-50">
            <h3 className="font-bold text-xl">Client Side</h3>
            <p className="text-gray-600">Render your React components effortlessly!</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg bg-green-50">
            <h3 className="font-bold text-xl">Server Side</h3>
            <p className="text-gray-600">Handle API requests smoothly with Bun!</p>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Explore More
        </button>
      </main>
    </div>
  );
};

export default App;
