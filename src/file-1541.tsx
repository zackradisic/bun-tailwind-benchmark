import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">Welcome to My Bun + Tailwind App!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white border rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-center mb-4">Just a simple fullstack example</h2>
          <p className="text-gray-700 mb-4">This is a quick demo showing how to create a fullstack app using <span className="font-bold">Bun</span> with <span className="font-bold">React</span> and <span className="font-bold">TypeScript</span>!</p>
          <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Click me!
          </button>
        </div>
      </main>
      <footer className="mt-auto p-4 bg-gray-300 w-full text-center">
        <p className="text-sm text-gray-600">Powered by Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
