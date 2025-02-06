import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full py-6 bg-blue-600 shadow-lg">
        <h1 className="text-4xl font-bold text-white">Bun + Tailwind CSS Demo</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow p-10">
        <h2 className="text-2xl font-semibold text-gray-800">Hello, Bun!</h2>
        <p className="mt-4 text-lg text-gray-600">
          This is a simple demonstration of how to use Bun with React and Tailwind CSS.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Click Me!
          </button>
          <button className="px-4 py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600">
            Another Action
          </button>
        </div>
      </main>
      <footer className="w-full py-4 bg-blue-600">
        <p className="text-center text-white">Powered by Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
