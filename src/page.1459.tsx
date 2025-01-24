import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">Bun + Tailwind Demo</h1>
      </header>
      <main className="flex-grow p-6">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Welcome to Bun!</h2>
          <p className="text-gray-700">
            Build fullstack applications with ease using Bun, React, and TypeScript. This demo showcases the power of Tailwind CSS for fast styling.
          </p>
          <div className="mt-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <footer className="bg-blue-600 p-4">
        <p className="text-center text-white">© 2023 Bun Integration Demo</p>
      </footer>
    </div>
  );
};

export default App;
