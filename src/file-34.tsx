import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-500 text-white w-full p-4 text-center font-bold">
        <h1 className="text-2xl">Welcome to Bun & Tailwind!</h1>
      </header>
      <main className="flex flex-col items-center mt-6">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">API Fetch Example</h2>
          <p className="mb-4">Click the button below to fetch data from the server!</p>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            onClick={async () => {
              const response = await fetch('/api/users');
              const users = await response.json();
              console.log(users);
            }}
          >
            Fetch Users
          </button>
        </div>
      </main>
      <footer className="absolute bottom-0 w-full text-center p-4">
        <p className="text-gray-600 text-sm">Built with Bun and TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
