import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun & Tailwind!</h1>
      <p className="mt-2 text-lg text-gray-700">
        This is a simple fullstack application showcasing Bun's new Tailwind integration.
      </p>
      <div className="mt-4">
        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded shadow hover:bg-blue-600 transition-colors">
          Click Me!
        </button>
      </div>
      <div className="mt-4 p-4 border border-gray-300 rounded shadow-sm">
        <h2 className="text-2xl text-gray-800">Server Response:</h2>
        <p id="serverResponse" className="text-lg text-gray-600">
          Fetching data from server...
        </p>
      </div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('serverResponse')!.innerText = JSON.stringify(data);
    })
    .catch(() => {
      document.getElementById('serverResponse')!.innerText = 'Failed to fetch data.';
    });
});

export default App;
