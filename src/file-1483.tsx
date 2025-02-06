import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to Your Bun App!</h1>
        <p className="text-gray-700 text-center mb-6">
          <span className="font-semibold">Fast</span>, <span className="font-semibold">Fun</span>, and <span className="font-semibold">Fullstack</span> development with
          <span className="text-blue-500"> Bun</span> and <span className="text-purple-500">Tailwind!</span>
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">Get Started</button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default App;
