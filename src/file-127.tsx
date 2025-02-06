import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-5">
      <header className="bg-blue-600 text-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Welcome to Bun + React + TypeScript!</h1>
      </header>
      <main className="flex-grow">
        <div className="mt-5">
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside">
            <li className="p-2 bg-white shadow-md rounded-lg">Fast Development with Hot Reloading</li>
            <li className="p-2 bg-white shadow-md rounded-lg">Seamless integration with TailwindCSS</li>
            <li className="p-2 bg-white shadow-md rounded-lg">Serve Fullstack apps effortlessly</li>
          </ul>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 rounded-lg mt-5">
        <p>Created with 💙 using Bun, React, and TypeScript!</p>
      </footer>
    </div>
  );
};

export default App;
