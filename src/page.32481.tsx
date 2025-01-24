import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md text-white">
        <h1 className="text-3xl font-bold text-center">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-10">
        <section className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Fast and Simple Fullstack Development</h2>
          <p className="mb-6 text-gray-700">Experience the speed of developing with Bun and React combined with the styling power of Tailwind CSS!</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Get Started
          </button>
        </section>
      </main>
      <footer className="bg-blue-600 w-full p-4 text-center text-white">
        <p>Powered by Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
