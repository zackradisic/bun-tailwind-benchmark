import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white w-full p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to My Bun + Tailwind App</h1>
      </header>
      <main className="flex flex-col items-center my-8">
        <section className="bg-white shadow rounded-lg p-6 mb-5 w-11/12 md:w-3/4">
          <h2 className="text-2xl font-semibold mb-4">Fast and Simple Setup</h2>
          <p className="text-gray-700 mb-4">
            Using Bun with TailwindCSS allows you to build fullstack applications quickly! Check out how easy it is to get started.
          </p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </section>
        <section className="bg-white shadow rounded-lg p-6 w-11/12 md:w-3/4">
          <h2 className="text-2xl font-semibold mb-4">API Fetch Example</h2>
          <div className="flex flex-col">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded mb-2 hover:bg-green-600 transition duration-300" onClick={fetchData}>
              Fetch Data
            </button>
            <p id="data" className="text-gray-700"></p>
          </div>
        </section>
      </main>
      <footer className="bg-blue-600 text-white w-full p-4 text-center">
        <p>&copy; 2023 My Bun + Tailwind App</p>
      </footer>
    </div>
  );
};

const fetchData = async () => {
  const response = await fetch('/api/users');
  const data = await response.json();
  document.getElementById('data')!.innerText = JSON.stringify(data);
};

export default App;
