import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to Bun with Tailwind!
        </h1>
        <p className="text-gray-600 mb-4">
          Experience fast fullstack development with Bun and React.
        </p>
        <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300">
          Get Started
        </button>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">API Data:</h2>
          <div id="api-data" className="mt-2 p-2 border border-gray-300 rounded bg-gray-50">
            {/* API data will appear here */}
          </div>
        </div>
      </div>
    </div>
  );
};

// This is for the server part
document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById('root');
  const dataContainer = document.getElementById('api-data');

  if (dataContainer) {
    const response = await fetch('/api/users');
    const users = await response.json();
    dataContainer.innerHTML = JSON.stringify(users, null, 2); // Displaying fetched API data
  }

  if (root) {
    ReactDOM.createRoot(root).render(<App />);
  }
});

export default App;
