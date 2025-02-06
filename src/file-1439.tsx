import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 text-white w-full py-4">
        <h1 className="text-3xl font-bold text-center">Welcome to My Bun App</h1>
      </header>
      <main className="flex flex-1 items-center justify-center mt-8">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-4">Fast and Simple Fullstack Development</h2>
          <p className="text-gray-700 mb-6">
            With Bun's new Tailwind integration, creating a React application is as easy as pie!
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </main>
      <footer className="w-full py-4 text-center">
        <p className="text-gray-600">© 2023 Bun Integration Demo</p>
      </footer>
    </div>
  );
};

export default App;
