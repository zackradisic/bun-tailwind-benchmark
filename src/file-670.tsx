import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="bg-blue-500 w-full p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white text-center">Welcome to the Bun + Tailwind App!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Fast & Simple Fullstack Development</h2>
          <p className="text-gray-700 mb-4">With Bun's powerful new Tailwind integration, building fullstack applications has never been easier!</p>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition-all duration-300">Get Started</button>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-600">This is a demo app served by Bun!</p>
      </footer>
    </div>
  );
};

export default App;
