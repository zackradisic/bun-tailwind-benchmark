import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + React + TypeScript!</h1>
      <p className="text-lg text-gray-700 mb-6">Build fullstack applications with ease.</p>
      <button className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
        Click Me!
      </button>
      <div className="mt-8 p-4 max-w-lg bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <div id="server-response" className="mt-2 p-2 border border-gray-300 rounded-md">
          Loading...
        </div>
      </div>
    </div>
  );
};

const fetchServerData = async () => {
  const response = await fetch('/api/data');
  const data = await response.json();
  document.getElementById('server-response').innerText = JSON.stringify(data);
};

React.useEffect(() => {
  fetchServerData();
}, []);

export default App;
