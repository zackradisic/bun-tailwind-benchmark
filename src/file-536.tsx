import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 mb-4">
          This is a demo showcasing how easy it is to build fullstack applications with <strong>Bun</strong>, <strong>React</strong>, and <strong>TypeScript</strong> using <strong>Tailwind CSS</strong>.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition duration-300">
            Click Me
          </button>
        </div>
        <div className="mt-8">
          <p className="text-center text-gray-500">
            Fetching data from the server...
          </p>
          <div className="mt-2 text-center" id="data-display"></div>
        </div>
      </div>
    </div>
  );
};

// Simulated API call
async function fetchData() {
  const response = await fetch('/api/users');
  const data = await response.json();
  displayData(data);
}

// Display data in the client
function displayData(data: any) {
  const displayElement = document.getElementById('data-display');
  if (displayElement) {
    displayElement.innerHTML = JSON.stringify(data, null, 2);
  }
}

// Fetch data when the component mounts
React.useEffect(() => {
  fetchData();
}, []);

export default App;
