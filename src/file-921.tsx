import "./style.css";
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 w-full py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to My Bun + Tailwind App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <p className="text-lg mb-4">This is a showcase of Bun's capabilities!</p>
        <button className="px-6 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
          Click Me
        </button>
      </main>
      <footer className="w-full py-4 mt-auto bg-gray-800 text-white text-center">
        <p className="text-sm">Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(<App />);
});

export default App;
