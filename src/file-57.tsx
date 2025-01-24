import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="bg-blue-500 text-white w-full p-4 shadow-md">
        <h1 className="text-2xl font-bold">Bun Tailwind Integration</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <h2 className="text-xl font-semibold mb-2">Welcome to Bun!</h2>
          <p className="text-gray-700 mb-4">
            This is a demo of how quickly you can set up a fullstack application with Bun, React, and TypeScript.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white w-full p-4 text-center">
        <p className="text-sm">© 2023 Bun Tailwind Demo</p>
      </footer>
    </div>
  );
};

export default App;
