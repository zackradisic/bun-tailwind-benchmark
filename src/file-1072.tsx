import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4">
        <h1 className="text-white text-3xl font-bold text-center">Welcome to Bun with Tailwind!</h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center justify-center p-8">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-4">Explore the Speed of Fullstack Development</h2>
          <p className="text-gray-700 mb-4">
            With Bun's new integration with Tailwind CSS, building stunning UIs has never been faster!
            You can create responsive designs effortlessly using utility classes.
          </p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Get Started
          </button>
        </div>
        <footer className="mt-8 text-gray-600">
          <p>API Status: <span className="font-semibold text-green-600">Running Smoothly!</span></p>
        </footer>
      </main>
    </div>
  );
};

export default App;
