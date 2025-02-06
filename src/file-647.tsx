import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Bun + React + Tailwind</h1>
        <p className="text-lg text-gray-700">Fast and simple fullstack development!</p>
      </header>
      <main className="flex flex-col items-center justify-center w-full">
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800">Client Side</h2>
          <p className="mt-2 text-gray-600">This is rendered by React.</p>
        </div>
        <div className="mt-6 px-4 py-2 border border-gray-300 rounded-lg shadow-md bg-blue-50">
          <h3 className="text-xl font-medium text-blue-700">API Response</h3>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Fetch Data
          </button>
        </div>
      </main>
      <footer className="mt-8 text-gray-500">
        <p>Developed with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
