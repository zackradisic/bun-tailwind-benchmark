import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Build fullstack apps with ease.</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Click Me!
      </button>
      <div className="mt-10 space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Client-Side</h2>
          <p className="text-gray-600">This is where you interact with the client.</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Server-Side</h2>
          <p className="text-gray-600">This is where your backend logic lives.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
