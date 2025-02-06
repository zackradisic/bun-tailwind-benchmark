import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Welcome to Bun with Tailwind CSS!</h1>
      </header>
      <main className="flex flex-col items-center mt-8">
        <section className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Fast, Fullstack Development</h2>
          <p className="text-gray-700 mb-4">
            With Bun, you can easily run your frontend and backend in the same application.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>
        <footer className="mt-8">
          <p className="text-gray-500">Built with ❤️ using Bun and React</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
