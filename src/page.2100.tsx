import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-5 w-full text-center">
        <h1 className="text-3xl font-bold">Welcome to My Bun + React App</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-5">Getting Started</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            This is a simple demonstration of using Bun with Tailwind CSS to build a fullstack application! It's fast, simple, and powerful.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Click Me
          </button>
        </div>
      </main>
      <footer className="mt-10 mb-5">
        <p className="text-gray-600">Built with ❤️ using Bun and React!</p>
      </footer>
    </div>
  );
};

export default App;
