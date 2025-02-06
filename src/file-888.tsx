import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Fast and simple fullstack development with Bun, React, and TypeScript.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Click Me
      </button>
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-600">Server Response:</h2>
        <p className="text-gray-600 mb-4" id="response"></p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            const res = await fetch('/api/users');
            const data = await res.json();
            document.getElementById('response')!.innerText = JSON.stringify(data);
          }}
        >
          Fetch Users
        </button>
      </div>
    </div>
  );
};

export default App;
