import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Bun with Tailwind</h1>
        <nav className="space-x-4">
          <a href="/" className="text-blue-600 hover:underline">Home</a>
          <a href="/dashboard" className="text-blue-600 hover:underline">Dashboard</a>
        </nav>
      </header>
      <main className="flex-grow p-8">
        <h2 className="text-4xl font-semibold text-white">Get Started Fast!</h2>
        <p className="mt-4 text-lg text-gray-200">Using Bun for fullstack React applications has never been easier.</p>
        <div className="mt-8 flex flex-wrap space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Get Started
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
            Learn More
          </button>
        </div>
      </main>
      <footer className="p-4 bg-white">
        <p className="text-center text-gray-800">Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
