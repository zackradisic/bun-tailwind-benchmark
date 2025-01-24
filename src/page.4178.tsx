import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using React, TypeScript, and Tailwind CSS.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Click me!
      </button>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Client Side</h2>
          <p className="text-gray-600">This section is rendered on the client side.</p>
        </div>
        <div className="bg-white p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Server Side</h2>
          <p className="text-gray-600">This section is handled by the Bun server.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
