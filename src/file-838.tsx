import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">Bun + TailwindCSS</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Welcome to Bun!</h2>
          <p className="text-gray-700 mb-4">
            Experience the power of a fullstack framework with Bun and TailwindCSS.
          </p>
          <a href="/api/users" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Fetch Users
          </a>
        </div>
      </main>
      <footer className="bg-blue-600 w-full p-4 mt-4">
        <p className="text-white text-center">Built with Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
