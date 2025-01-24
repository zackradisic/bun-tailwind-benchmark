import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Bun with TailwindCSS</h1>
        <p className="text-gray-700 mb-6">This is a demo application showcasing the integration of Bun, React, and TailwindCSS.</p>
        <div className="space-y-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Click Me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Another Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
