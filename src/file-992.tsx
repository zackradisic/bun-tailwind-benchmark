import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <h1 className="text-white text-3xl font-bold text-center">Welcome to Bun with Tailwind CSS</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-700 mb-2">This is a simple fullstack application built with:</p>
          <ul className="list-disc list-inside mb-4">
            <li>React</li>
            <li>TypeScript</li>
            <li>Bun with Tailwind CSS Integration</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Click Me
          </button>
        </div>
        <footer className="mt-10">
          <p className="text-gray-600">Bun Server is running!</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
