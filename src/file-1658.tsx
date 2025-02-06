import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold">Bun + React + Tailwind</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-xl font-semibold mb-4">Welcome to My Fullstack App</h2>
        <p className="text-gray-700 mb-6">Using Bun's Tailwind integration is fast and easy!</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">
          Action Button
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Server-Side Rendering</h3>
            <p className="text-gray-600">This component showcases server-rendered content.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Client-Side Interaction</h3>
            <p className="text-gray-600">Enjoy responsive interactions in real-time!</p>
          </div>
        </div>
      </main>
      <footer className="w-full p-4 bg-gray-200 mt-10">
        <p className="text-center text-gray-600">Built with ❤️ using Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
