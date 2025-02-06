import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-md">
        <h1 className="text-2xl text-white text-center">My Fullstack App</h1>
      </header>
      <main className="flex flex-col items-center mt-8">
        <div className="bg-white border rounded-lg shadow-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to Bun with Tailwind</h2>
          <p className="text-gray-600">This is a simple example showcasing the speed and simplicity of Bun in building fullstack applications with React and TypeScript.</p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Click Me
            </button>
          </div>
        </div>
        <footer className="mt-8 text-gray-600">
          <p>&copy; 2023 Bun Fullstack App</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
