import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-2xl text-white font-bold text-center">Welcome to Bun with Tailwind</h1>
      </header>
      <main className="flex-1 p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">React & TypeScript with TailwindCSS</h2>
          <p className="text-gray-700 mb-4">
            This is a demo of how easy it is to build fullstack applications using Bun with React and TypeScript!
          </p>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </section>
      </main>
      <footer className="w-full p-4 bg-gray-800 text-center">
        <p className="text-white">Built with ♥ using Bun</p>
      </footer>
    </div>
  );
};

export default App;
