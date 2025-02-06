import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to My Bun + Tailwind App!</h1>
        <p className="mt-4 text-lg text-gray-700">Experience the power of fullstack development!</p>
      </header>
      <main className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-green-500 mb-4">Features</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2 text-gray-700">🚀 Fast development with Bun</li>
            <li className="mb-2 text-gray-700">🌈 Responsive design with Tailwind CSS</li>
            <li className="mb-2 text-gray-700">⚡ Easy API integration</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-red-500 mb-4">Server API</h2>
          <p className="text-gray-700 mb-2">Fetch users from our API:</p>
          <button
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
            onClick={async () => {
              const response = await fetch('/api/users');
              const data = await response.json();
              console.log(data);
            }}
          >
            Get Users
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
