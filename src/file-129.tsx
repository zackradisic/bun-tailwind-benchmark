import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to Bun with Tailwind!</h1>
        <p className="text-center text-gray-600 mb-4">
          This is a fullstack application powered by Bun, React, and TypeScript.
        </p>
        <div className="flex flex-col space-y-4">
          <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">API Call</button>
          <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default App;
