import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-600">Welcome to Bun with Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-600">Fast & Fullstack Development with React & TypeScript</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="px-6 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 transition duration-300">
          Client Button
        </button>
        <button className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition duration-300">
          API Button
        </button>
      </div>
      <div className="mt-10 p-6 bg-white shadow-lg rounded-lg max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <p className="mt-2 text-gray-500">Hello from the Bun server!</p>
      </div>
    </div>
  );
};

export default App;
