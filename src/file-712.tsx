import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS!</h1>
      <p className="text-lg text-gray-700">This is a fullstack application powered by Bun.</p>
      <div className="mt-6 p-4 border rounded shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-green-500">API Data</h2>
        <div className="space-y-2">
          {/* This section can be dynamic based on API data */}
          <p className="text-gray-800">Fetching data from the Bun backend...</p>
        </div>
      </div>
      <footer className="absolute bottom-4 text-gray-500">
        <p>Powered by <span className="font-semibold">Bun</span> & <span className="font-semibold">TailwindCSS</span></p>
      </footer>
    </div>
  );
};

export default App;
