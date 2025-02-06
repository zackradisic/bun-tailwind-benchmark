import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun + Tailwind!</h1>
      <p className="mt-4 text-lg text-gray-700">This is a fullstack application built with React and TypeScript.</p>
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-500">API Test</h2>
        <button
          className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            console.log(data);
          }}
        >
          Fetch Users
        </button>
      </div>
      <footer className="mt-16 text-gray-500">
        <p>Use Bun's server for dynamic API calls!</p>
      </footer>
    </div>
  );
};

export default App;
