import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun Fullstack App</h1>
      </header>
      <main className="mt-6">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
          <h2 className="text-xl font-semibold text-gray-800">Fast and Simple</h2>
          <p className="text-gray-600">
            With Bun's new Tailwind integration, you can effortlessly build and style your applications in no time!
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </main>
      <footer className="w-full mt-auto py-4 bg-gray-200 text-center">
        <p className="text-sm text-gray-500">© 2023 Bun Fullstack App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
