import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-3xl text-white font-bold text-center">Bun + TailwindCSS</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Server and Client integration!</h2>
          <p className="text-gray-700 mb-2">
            This app showcases how to quickly build fullstack applications using Bun, React, and TypeScript.
          </p>
          <p className="text-gray-600 mb-4">
            Check out the fast API response from your server!
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition-colors">
            Fetch Data
          </button>
        </section>
        <footer className="mt-5">
          <p className="text-sm text-gray-500">Built with Bun & Tailwind</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
