import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application powered by Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Client Side</h2>
          <p className="text-gray-600">Interact with the React components and see how fast they load!</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Click Me
          </button>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Server Side</h2>
          <p className="text-gray-600">Fetch data from the server effortlessly using Bun's API!</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            Fetch Data
          </button>
        </div>
      </div>
      <footer className="mt-12 text-gray-600">
        <p>Powered by <span className="font-bold text-blue-600">Bun</span></p>
      </footer>
    </div>
  );
};

export default App;
