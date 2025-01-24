import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 w-full shadow-lg">
        <h1 className="text-white text-3xl font-bold text-center">Bun + Tailwind CSS</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Your Fullstack App</h2>
        <p className="text-gray-700 mb-6">Build fast with Bun and Tailwind CSS.</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 transition duration-300">
          Click Me!
        </button>
      </main>
      <footer className="mt-10 mb-4 text-gray-600">
        <p>Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
