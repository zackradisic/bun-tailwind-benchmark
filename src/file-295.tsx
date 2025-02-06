import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-4">
        <h1 className="text-3xl font-bold">Welcome to the Bun + Tailwind Demo!</h1>
      </header>
      
      <main className="flex flex-col items-center">
        <p className="text-lg mb-4">This is a fullstack application powered by Bun, React, and TypeScript using Tailwind CSS for styling.</p>

        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 transition duration-300">
          Click Me
        </button>
        
        <div className="mt-8">
          <p className="text-md text-gray-700">Here's some dynamic content from the server:</p>
          <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-lg mt-2">
            <p id="serverContent" className="text-blue-800"></p>
          </div>
        </div>
      </main>
    </div>
  );
};

// Fetch data from the server
const fetchData = async () => {
  const response = await fetch('/api/data');
  const data = await response.json();
  document.getElementById('serverContent').innerText = JSON.stringify(data);
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  fetchData();
  const root = document.getElementById('root');
  if (root) {
    root.render(<App />);
  }
});

export default App;
