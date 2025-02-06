import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 shadow-md">
        <h1 className="text-white text-2xl font-bold text-center">My Bun & Tailwind App</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center mt-4">
        <section className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your Fast Fullstack App!</h2>
          <p className="text-gray-700 mb-4">
            This app demonstrates how quickly you can build a fullstack application using Bun with React and TypeScript, along with beautiful Tailwind CSS styles.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
            Get Started
          </button>
        </section>
      </main>
      <footer className="bg-gray-800 w-full p-4">
        <p className="text-white text-center">Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

// Server code (placed in a separate file, e.g., server.ts)
Bun.serve({
  static: {
    "/": "<html><body><div id='root'></div></body></html>",
  },
  async fetch(req) {
    return new Response("API response");
  },
});

export default App;
