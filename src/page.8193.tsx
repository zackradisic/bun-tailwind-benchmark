import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow-md">
        <h1 className="text-2xl font-semibold">Bun & Tailwind Integration</h1>
      </header>
      <main className="flex-1 w-full p-6">
        <section className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Welcome to Bun</h2>
          <p className="text-gray-700 mb-4">
            This is a demo of how effortlessly you can use Bun's fullstack capabilities with React and TypeScript.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded transition duration-200 hover:bg-green-600">
            Get Started
          </button>
        </section>
      </main>
      <footer className="bg-gray-800 text-white w-full p-4 text-center">
        <p>&copy; 2023 Bun Demo Application</p>
      </footer>
    </div>
  );
};

export default App;
