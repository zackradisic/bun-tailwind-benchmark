import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + React!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a simple fullstack application using Bun as the backend and client.</p>
      <button 
        onClick={async () => {
          const res = await fetch('/api/users');
          const data = await res.json();
          console.log('Users:', data);
        }} 
        className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded shadow">
        Fetch Users
      </button>
      <div className="mt-6 p-4 border border-gray-300 rounded">
        <h2 className="text-2xl font-semibold text-gray-800">Fetched Users:</h2>
        {/* Render user data dynamically here */}
      </div>
    </div>
  );
};

export default App;
