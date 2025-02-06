import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun & Tailwind App!</h1>
      <p className="text-lg text-gray-700 mb-6">This app showcases the seamless integration of Bun with Tailwind CSS.</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-md transform transition hover:scale-105">
          <h2 className="text-xl font-semibold">Client Side</h2>
          <p className="text-gray-600">Fast and modern frontend built with React.</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Click Me</button>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md transform transition hover:scale-105">
          <h2 className="text-xl font-semibold">Server Side</h2>
          <p className="text-gray-600">Robust API responses powered by Bun.</p>
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Fetch Data</button>
        </div>
      </div>
      <footer className="mt-12 text-gray-500">
        <p>Built with ❤️ using Bun, React, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
