import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 w-full p-4 shadow-lg">
        <h1 className="text-white text-3xl font-bold text-center">Bun + Tailwind with React</h1>
      </header>
      <main className="flex flex-col items-center w-full p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Fullstack App</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <h3 className="text-xl font-semibold mb-2">Client and Server Integration</h3>
          <p className="text-gray-700 mb-4">
            This demo showcases how quickly and efficiently we can build a fullstack application using Bun, React, and TypeScript.
          </p>
          <button
            onClick={async () => {
              const response = await fetch('/api/users');
              const data = await response.json();
              alert(JSON.stringify(data));
            }}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            Fetch Users
          </button>
        </div>
      </main>
      <footer className="w-full p-4 text-center bg-gray-800 text-white">
        <p className="text-sm">Made with ❤️ using Bun</p>
      </footer>
    </div>
  );
};

export default App;
