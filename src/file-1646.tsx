import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 w-full p-4 shadow-lg">
        <h1 className="text-4xl text-white font-bold text-center">Bun + Tailwind integration</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Bun App!</h2>
          <p className="text-gray-700 mb-4">
            This amazing application showcases Bun's powerful integration with Tailwind CSS.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Click Me
          </button>
        </section>
        <footer className="mt-10">
          <p className="text-gray-600">© 2023 Bun. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
