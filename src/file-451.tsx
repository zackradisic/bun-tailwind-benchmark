import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun with Tailwind CSS!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a demo of a fullstack application using Bun, React, and TypeScript.
      </p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-500">Server Response:</h2>
        <div className="bg-white shadow-md rounded-lg p-4 mt-2">
          <p className="text-gray-600" id="server-response">Loading...</p>
        </div>
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', async () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const { createRoot } = await import('react-dom/client');
    const root = createRoot(rootElement);
    root.render(<App />);
  }

  const response = await fetch('/api/users');
  const users = await response.json();
  document.getElementById('server-response')!.innerText = JSON.stringify(users, null, 2);
});

export default App;
