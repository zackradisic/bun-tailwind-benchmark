import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 w-full p-4">
        <h1 className="text-white text-3xl font-bold text-center">Welcome to My App</h1>
      </header>
      <main className="flex grow items-center justify-center">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Quick Start with Bun</h2>
          <p className="mt-2 text-gray-600">This is a demonstration of Bun's new Tailwind integration!</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-600">
            Click Me!
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 w-full p-4">
        <p className="text-center text-white text-sm">Built with Bun, React, and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
