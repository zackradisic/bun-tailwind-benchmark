import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Bun + React + Tailwind</h1>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Hello, World!</h2>
          <p className="mb-4 text-gray-700">
            This is a fullstack application showing off Bun's Tailwind integration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold">Client Part</h3>
              <p className="text-gray-600">Rendering with React and Tailwind is fast!</p>
            </div>
            <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold">Server Part</h3>
              <p className="text-gray-600">Fetching API data seamlessly.</p>
            </div>
            <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold">Responsive Design</h3>
              <p className="text-gray-600">This layout adjusts beautifully across devices.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-600 text-white p-4">
        <p className="text-center">Built with Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
