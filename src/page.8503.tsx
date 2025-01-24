import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="flex justify-between items-center w-full p-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Bun & Tailwind Showcase</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Welcome to the Bun App!</h2>
          <p className="mt-4 text-lg">This app is built with <strong>React</strong> and <strong>TypeScript</strong>, utilizing <strong>Tailwind CSS</strong> for styling.</p>
        </div>
      </main>
      <footer className="p-4 bg-blue-500 text-white">
        <p className="text-center">© 2023 Bun Fullstack Demo</p>
      </footer>
    </div>
  );
};

export default App;
