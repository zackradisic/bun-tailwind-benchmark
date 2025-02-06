import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to Bun with Tailwind</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Fullstack App</h2>
          <p className="text-gray-700 mb-4">
            This is a demo application showcasing the speed and simplicity of
            using Bun's fullstack server along with Tailwind CSS.
          </p>
          <button className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out">
            Click me!
          </button>
        </div>
      </main>
      <footer className="mt-10">
        <p className="text-gray-600">&copy; 2023 Bun & Tailwind Demo</p>
      </footer>
    </div>
  );
};

export default App;
