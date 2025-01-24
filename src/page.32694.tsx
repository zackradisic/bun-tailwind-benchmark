import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Experience the power of fullstack development with Bun, React, and TypeScript in action.
        </p>
        <button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-2 transition duration-300">
          Get Started
        </button>
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner mt-2">
            <p id="server-response" className="text-gray-700">Fetching data...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const fetchDataFromServer = async () => {
  const response = await fetch('/api/users');
  const data = await response.json();
  document.getElementById('server-response')!.innerText = JSON.stringify(data);
};

document.addEventListener("DOMContentLoaded", fetchDataFromServer);

export default App;
