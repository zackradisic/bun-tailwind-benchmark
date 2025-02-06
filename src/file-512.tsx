import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold">Bun + TailwindCSS</h1>
      </header>
      <main className="flex-1 p-4">
        <section className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Fullstack App with Bun</h2>
          <p className="text-gray-700">
            Harnessing the power of Bun's fullstack capabilities to quickly
            develop web applications with React and TypeScript is a breeze!
          </p>
          <p className="mt-2">
            Fetching data from the server and displaying it in a sleek UI has
            never been easier.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={async () => {
              const response = await fetch("/api/users");
              const users = await response.json();
              console.log(users);
            }}
          >
            Fetch Users
          </button>
        </section>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
