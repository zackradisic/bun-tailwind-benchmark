import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="flex flex-wrap justify-center">
        <div className="m-2 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-600">Client Side</h2>
          <p className="text-gray-600">React components with Tailwind CSS are beautifully styled.</p>
        </div>
        <div className="m-2 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-600">Server Side</h2>
          <p className="text-gray-600">Bun can handle your API requests seamlessly.</p>
        </div>
      </div>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default App;
