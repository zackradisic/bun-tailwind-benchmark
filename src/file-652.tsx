import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 w-full text-center">
        <h1 className="text-3xl text-white">Welcome to Bun with TailwindCSS!</h1>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <section className="p-8 bg-white rounded-lg shadow-md mx-4">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="text-gray-700">
            With Bun and Tailwind, creating fullstack applications is a breeze!
          </p>
          <button className="mt-4 px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded">
            Click Me!
          </button>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 w-full text-center">
        <p>&copy; 2023 Bun Integration Showcase</p>
      </footer>
    </div>
  );
};

export default App;
