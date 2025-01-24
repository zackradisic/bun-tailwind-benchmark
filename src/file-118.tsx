import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-screen">
      <header className="bg-blue-700 text-white w-full py-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">Bun & Tailwind CSS Demo</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Bun!</h2>
          <p className="text-gray-700 mb-4">
            This is a fullstack application built with Bun, React, and TypeScript.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
        </section>
        <button className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200">
          Fetch Server Data
        </button>
      </main>
      <footer className="mt-auto bg-gray-800 text-white py-4 w-full text-center">
        <p>Powered by Bun & Tailwind!</p>
      </footer>
    </div>
  );
};

export default App;
