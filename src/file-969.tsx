import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application built with Bun, React, and TypeScript.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl text-blue-500">Client Side</h2>
          <p className="text-gray-600">Lightweight and fast rendering using React.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl text-blue-500">Server Side</h2>
          <p className="text-gray-600">Handle API requests seamlessly with Bun.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl text-blue-500">Tailwind Integration</h2>
          <p className="text-gray-600">Fast styling with utility-first classes.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
