import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-gray-700 text-center mb-6">This is a fullstack app powered by Bun, React, and TypeScript.</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Fetch Data example:</p>
          <div className="mt-2">
            <span className="text-gray-700">Click the button to see the server response</span>
            <button 
              onClick={async () => {
                const response = await fetch('/api/users'); 
                const data = await response.json();
                alert(JSON.stringify(data));
              }} 
              className="ml-2 bg-green-500 text-white font-semibold py-1 px-3 rounded hover:bg-green-600 transition"
            >
              Fetch Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
