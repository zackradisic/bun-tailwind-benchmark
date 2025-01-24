import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Bun & Tailwind Demo!</h1>
      <p className="text-xl text-gray-700 mb-8">This is a simple fullstack application using Bun, React, and TypeScript.</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p className="text-gray-600">This section is powered by React components and styled with Tailwind CSS.</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p className="text-gray-600">Bun serves backend functions and connects with a database seamlessly.</p>
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default App;
