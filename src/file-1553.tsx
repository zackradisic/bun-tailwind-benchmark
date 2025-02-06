import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-blue-600 text-white p-4 shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to Bun Fullstack App!</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Quick Start with Tailwind CSS</h2>
          <p className="mb-6 text-gray-700">Build your React component with ease using Bun's server integration.</p>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
            Get Started
          </button>
        </div>
      </main>
      <footer className="w-full mt-auto bg-gray-800 text-white p-4 text-center">
        <p className="text-sm">© 2023 Bun Fullstack Example. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
