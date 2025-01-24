import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4">
        <h1 className="text-white text-4xl font-bold text-center">Bun + Tailwind CSS</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <section className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Fullstack App</h2>
          <p className="text-gray-600 mb-4">This is a demo application showcasing the amazing integration of Bun, React, and Tailwind CSS.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
        </section>
      </main>
      <footer className="w-full p-4 bg-gray-800 text-center">
        <p className="text-white">Powered by Bun - Fast, Simple, Fullstack Development</p>
      </footer>
    </div>
  );
};

export default App;
