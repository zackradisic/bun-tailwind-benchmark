import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Welcome to My Bun + Tailwind App!</h1>
      </header>
      <main className="flex flex-col items-center mt-10 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800">API Data:</h2>
          <ul className="mt-4 space-y-2">
            {/* Example of dynamically rendering API data */}
            <li className="p-4 bg-gray-200 rounded-lg">User 1: <span className="text-blue-500">John Doe</span></li>
            <li className="p-4 bg-gray-200 rounded-lg">User 2: <span className="text-blue-500">Jane Doe</span></li>
          </ul>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={async () => {
            const response = await fetch('/api/users');
            const users = await response.json();
            console.log(users);
          }}
        >
          Fetch Users
        </button>
      </main>
      <footer className="mt-auto py-4 w-full text-center bg-gray-200">
        <p className="text-gray-700">Built with <span className="text-red-500">Bun</span> and <span className="text-purple-500">TailwindCSS</span></p>
      </footer>
    </div>
  );
};

export default App;
