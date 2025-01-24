import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 flex justify-between items-center px-8 shadow-md">
        <h1 className="text-xl font-bold">My Bun + Tailwind App</h1>
        <nav>
          <a href="/" className="mx-4 hover:underline">Home</a>
          <a href="/dashboard" className="mx-4 hover:underline">Dashboard</a>
        </nav>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Your App!</h2>
        <button className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-400 transition duration-300">
          Click Me
        </button>
      </main>
      <footer className="mt-auto py-4 bg-gray-200 w-full text-center">
        <p className="text-sm text-gray-600">Built with Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
