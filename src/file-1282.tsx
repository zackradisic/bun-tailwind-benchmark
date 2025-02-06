import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</header>
      <main className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800">Building Fullstack Apps Made Easy</h2>
        <p className="text-gray-500 mb-4">Experience the speed and simplicity of using Bun.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Get Started
        </button>
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="flex items-center justify-center w-48 h-48 bg-green-200 rounded-lg shadow-lg">
            <span className="text-lg font-semibold">API Integration</span>
          </div>
          <div className="flex items-center justify-center w-48 h-48 bg-yellow-200 rounded-lg shadow-lg">
            <span className="text-lg font-semibold">Seamless Styling</span>
          </div>
          <div className="flex items-center justify-center w-48 h-48 bg-red-200 rounded-lg shadow-lg">
            <span className="text-lg font-semibold">Rapid Development</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
