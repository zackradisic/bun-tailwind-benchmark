import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun Fullstack Development!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a simple demonstration of Bun's Tailwind integration and fullstack capabilities using React and TypeScript.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
        Click Me!
      </button>
      <div className="mt-10 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Response:</h2>
        <p className="text-gray-600" id="server-response">Fetching data...</p>
      </div>
    </div>
  );
};

// Fetch example data from the server
const fetchData = async () => {
  const response = await fetch('/api/users');
  const data = await response.json();
  document.getElementById('server-response').innerText = JSON.stringify(data, null, 2);
};

// Attach fetchData to document ready event
document.addEventListener('DOMContentLoaded', fetchData);

export default App;
