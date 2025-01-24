import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a fullstack app powered by Bun, React, and TypeScript.</p>
      <button className="px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-8 p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <p className="text-gray-600 mt-2" id="server-response">Loading...</p>
      </div>
    </div>
  );
};

export default App;

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch('/api/data');
  const data = await res.json();
  document.getElementById('server-response')!.textContent = JSON.stringify(data);
});
