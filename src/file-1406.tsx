import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-8 shadow">
        <h1 className="text-2xl font-bold">Welcome to Bun with Tailwind CSS!</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Hello World!</h2>
          <p className="text-gray-700">This is a fullstack application powered by Bun, React, and TypeScript.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Click Me!
          </button>
        </div>
      </main>
      <footer className="bg-blue-600 text-white py-4 px-8 text-center">
        <p>&copy; 2023 My Bun App</p>
      </footer>
    </div>
  );
};

export default App;
