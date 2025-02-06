import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow-md w-full p-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">Bun + Tailwind CSS</h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Welcome to the Fullstack Application!</h2>
          <p className="text-gray-600 mb-4">Bun + React + TypeScript + Tailwind CSS</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click Me
          </button>
        </div>
        <div className="mt-6">
          <span className="text-lg">Fetch Data:</span>
          <button
            className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              const response = await fetch('/api/data');
              const data = await response.json();
              console.log(data);
            }}
          >
            Get Data
          </button>
        </div>
      </main>
      <footer className="mt-10 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
};

export default App;
