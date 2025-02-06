import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-2xl p-4 rounded shadow-md w-full text-center">Welcome to Bun's Fullstack Dev!</header>
      <main className="flex flex-col items-center mt-5 space-y-4">
        <section className="max-w-md p-5 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-bold text-blue-700">Fast Development</h2>
          <p className="text-gray-600">Experience lightning-fast development with Bun's built-in HTTP server and Tailwind integration!</p>
        </section>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">Get Started</button>
      </main>
      <footer className="absolute bottom-5 text-gray-500">
        Built with <span className="text-red-500">Bun</span> and <span className="text-blue-500">TailwindCSS</span>
      </footer>
    </div>
  );
}

export default App;
