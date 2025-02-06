import "./style.css";
import React from "react";

const App: React.FC = () => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Bun + Tailwind CSS Demo</h1>
      </header>
      <main className="flex-grow flex flex-col items-center">
        <h2 className="text-2xl font-semibold mt-6">Fast & Simple Fullstack Dev</h2>
        <p className="mt-4 text-lg">Building applications with Bun, React, and TypeScript!</p>
        <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 transition duration-300">
          Fetch Users
        </button>
      </main>
      <footer className="bg-gray-800 w-full p-4 text-white text-center">
        <p className="text-sm">&copy; 2023 Bun Integration</p>
      </footer>
    </div>
  );
};

export default App;
