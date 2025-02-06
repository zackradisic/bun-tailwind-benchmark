import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full py-4 shadow-md">
        <h1 className="text-white text-4xl font-bold text-center">My Bun & Tailwind App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome to the Future of Development</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Build fullstack applications with Bun, React, and TypeScript with ease!
        </p>
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
          <h3 className="text-xl font-bold text-gray-800">Get Started:</h3>
          <ul className="mt-4 list-disc list-inside">
            <li className="text-gray-700">1. Create your components using React and TypeScript.</li>
            <li className="text-gray-700">2. Style them effortlessly with Tailwind CSS.</li>
            <li className="text-gray-700">3. Launch your application on Bun's fast server.</li>
          </ul>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
          Click Me!
        </button>
      </main>
      <footer className="mt-10 w-full text-center py-4 bg-gray-800 text-white">
        <p>© {new Date().getFullYear()} Bun & Tailwind Demo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
