import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700">Building fullstack applications is now faster and simpler.</p>
      <div className="mt-8 flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-400 transition">
          Get Started
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-400 transition">
          Learn More
        </button>
      </div>
      <footer className="mt-12 text-gray-500">
        <p>API Response:</p>
        <div className="bg-white p-4 border border-gray-300 rounded shadow">
          <pre>{JSON.stringify({ message: "Hello from Bun!" }, null, 2)}</pre>
        </div>
      </footer>
    </div>
  );
};

export default App;
