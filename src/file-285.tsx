import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex items-center justify-between w-full p-6 bg-blue-500">
        <h1 className="text-4xl text-white font-bold">Bun + Tailwind Demo</h1>
        <nav>
          <a className="text-white hover:underline mx-2" href="/">Home</a>
          <a className="text-white hover:underline mx-2" href="/dashboard">Dashboard</a>
        </nav>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Building Fullstack with Bun</h2>
        <p className="mt-4 text-center text-gray-600 max-w-md">
          Experience the speed and simplicity of developing fullstack applications using Bun, React, and TypeScript. 
          This demo app showcases the seamless integration of backend logic and modern frontend design.
        </p>
        <button className="mt-8 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Get Started
        </button>
      </main>
      <footer className="w-full mt-10 p-4 bg-gray-200 text-center">
        <p className="text-gray-600">This is a demo application powered by Bun and TailwindCSS.</p>
      </footer>
    </div>
  );
};

export default App;
