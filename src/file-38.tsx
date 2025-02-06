import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun Fullstack App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-xl mb-4">Fast & Simple Fullstack Development</h2>
        <p className="text-gray-700 text-center mb-6">
          This app showcases Bun's integration with TailwindCSS and the simplicity of building fullstack applications with React and TypeScript.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </main>
      <footer className="mt-auto mb-4 text-gray-600">
        <p>&copy; 2023 Bun Development</p>
      </footer>
    </div>
  );
};

export default App;
