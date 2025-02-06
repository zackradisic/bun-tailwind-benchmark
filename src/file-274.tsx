import "./style.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to the Bun Fullstack App!</h1>
      <p className="text-lg mb-6 text-gray-700">This is a demo showcasing the integration of Tailwind CSS with Bun's fullstack capabilities.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Click Me!</button>
      <div className="mt-8 p-4 border border-gray-300 rounded shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-2 text-green-500">Server Response</h2>
        <pre className="bg-gray-200 p-2 rounded">Fetching data from the server...</pre>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Built with love using Bun & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
