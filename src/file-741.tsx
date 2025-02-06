import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is a fullstack application built with Bun, TypeScript, and Tailwind CSS.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">
        Click Me!
      </button>
      <div className="mt-8 space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">Server Response:</h2>
          <p id="api-response" className="text-gray-600">Waiting for response...</p>
        </div>
      </div>
    </div>
  );
};

// Fetch data from the server
const fetchData = async () => {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    document.getElementById('api-response')!.innerText = JSON.stringify(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Add event listener to fetch data when the component mounts
React.useEffect(() => {
  fetchData();
}, []);

export default App;
