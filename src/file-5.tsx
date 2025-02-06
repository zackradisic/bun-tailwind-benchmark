import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-4">This is a demo for showcasing Bun's integration with Tailwind CSS.</p>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-500 mb-2">Server-Side Data Fetching</h2>
        <p className="text-sm text-gray-600">Fetching data from the server is seamless!</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Fetch Users
        </button>
      </div>
      <footer className="mt-8 text-sm text-gray-500">
        <p>Powered by Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
