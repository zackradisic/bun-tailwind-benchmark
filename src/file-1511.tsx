import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow">
        <h1 className="text-3xl font-bold">Welcome to Bun + Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Demo Component</h2>
          <p className="text-gray-700 text-base mb-6">
            This component showcases how simple it is to integrate Tailwind CSS
            with Bun's fullstack development server.
          </p>
          <button className="mt-4 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-green-600">
            Click Me!
          </button>
        </div>
        <footer className="mt-10 text-gray-600">
          <p>Powered by Bun and Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
