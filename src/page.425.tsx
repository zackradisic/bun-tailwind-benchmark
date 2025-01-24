import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full text-center py-4">
        <h1 className="text-3xl font-bold">Welcome to My Bun App</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <section className="bg-white shadow-lg rounded-lg p-8 mb-6 w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <span className="font-medium text-blue-500">🚀 Fast</span> - Built with Bun for speed.
            </li>
            <li className="mb-2">
              <span className="font-medium text-blue-500">🎨 TailwindCSS</span> - Beautiful design in minutes.
            </li>
            <li className="mb-2">
              <span className="font-medium text-blue-500">🔧 Fullstack</span> - Easily manage both frontend and backend.
            </li>
          </ul>
        </section>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
      </main>

      <footer className="bg-blue-600 text-white text-center py-4 w-full">
        <p>© 2023 My Bun App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
