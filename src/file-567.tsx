import "./style.css";
// MyComponent.tsx
import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-5 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">Welcome to My Bun App!</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-5">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Using Bun with TailwindCSS</h2>
          <p className="mb-5 text-gray-700;">This is a simple demonstration of how to use Bun's new Tailwind integration. Watch how fast our server responds!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Click Me!
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 w-full p-4">
        <p className="text-white text-center">© 2023 My Bun App</p>
      </footer>
    </div>
  );
};

export default MyComponent;
