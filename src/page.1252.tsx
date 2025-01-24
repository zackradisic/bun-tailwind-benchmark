import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <header className="bg-blue-600 w-full py-4 shadow">
        <h1 className="text-3xl font-bold text-white text-center">
          Bun Fullstack with Tailwind CSS
        </h1>
      </header>
      <main className="flex-grow flex flex-col items-center">
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Welcome!</h2>
          <p className="text-gray-600 mb-4">
            This demonstrates the power of building applications using Bun with React and TypeScript, enhanced by Tailwind CSS.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
            Get Started
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 w-full py-4">
        <p className="text-center text-white">
          &copy; 2023 Bun Development
        </p>
      </footer>
    </div>
  );
};

export default App;
