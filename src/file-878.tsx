import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack app built using Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Side</h2>
          <p className="text-gray-600">Utilizing React components to build a dynamic UI.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Side</h2>
          <p className="text-gray-600">Using Bun to handle backend API requests seamlessly.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Performance</h2>
          <p className="text-gray-600">Experience fast loading times with optimized bundling.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
