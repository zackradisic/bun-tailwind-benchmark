import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 shadow">
        <h1 className="text-3xl font-bold">Bun + React + Tailwind</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Bun!</h2>
          <p className="text-gray-700 mb-4">
            Build fast fullstack applications with React and TypeScript using Bun’s powerful features.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-xl">API Example:</h3>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition" onClick={async () => {
            const response = await fetch('/api/users');
            const users = await response.json();
            console.log(users);
          }}>
            Fetch Users
          </button>
        </div>
        <footer className="mt-10 text-gray-500">
          <p>Powered by Bun</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
