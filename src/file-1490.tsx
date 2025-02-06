import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 rounded shadow-lg w-full md:w-1/3">
        <h1 className="text-2xl font-bold text-center">Bun + React + TypeScript</h1>
      </header>
      <main className="flex flex-col items-center mt-8">
        <section className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Welcome to the Demo!</h2>
          <p className="text-gray-700 mb-4">
            This is a showcase of how fast and simple it is to build fullstack applications using Bun, React, and TypeScript.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </section>
        <section className="mt-8">
          <h3 className="text-lg font-semibold">API Fetch Example</h3>
          <div className="bg-gray-200 p-4 rounded shadow mt-2">
            <p className="text-gray-700">
              Fetching data from the API is seamless. When you click below, it shows API response:
            </p>
            <button
              className="mt-2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 transition duration-300"
              onClick={async () => {
                const response = await fetch("/api/users");
                const data = await response.json();
                console.log(data);
              }}
            >
              Fetch Users
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
