import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white">
        <h1 className="text-3xl font-bold">Welcome to Bun with Tailwind</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-xl font-semibold mb-4">Get Started with Fullstack Development!</h2>
        <p className="text-gray-700 mb-2">Bun makes it easy to create modern fullstack applications with ease.</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Frontend
          </button>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
            Backend
          </button>
        </div>
      </main>
      <footer className="absolute bottom-0 w-full p-4 bg-gray-800 text-white text-center">
        <p className="text-sm">© 2023 Bun Framework. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
