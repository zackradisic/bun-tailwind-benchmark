import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 w-full">
        <h1 className="text-3xl text-center">Welcome to My Bun Fullstack App</h1>
      </header>
      <main className="flex-1 w-full p-5">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <div className="flex flex-row justify-between space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              onClick={async () => {
                const response = await fetch('/api/users');
                const users = await response.json();
                console.log(users);
              }}>
              Fetch Users
            </button>
          </div>
          <div className="mt-4 text-gray-700">
            <p className="mb-2">Click the button to fetch user data from the API!</p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4 w-full text-center">
        <p>© 2023 Bun Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
