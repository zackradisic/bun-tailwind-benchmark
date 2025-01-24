import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Our Fullstack App</h1>
      <p className="text-lg text-gray-700 mb-6">Built with Bun, React, TypeScript and Tailwind CSS</p>
      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 ease-in-out">
        Click Me!
      </button>
      <div className="mt-8 p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-medium text-gray-800">Server Response:</h2>
        <pre className="mt-2 text-sm text-gray-600">
          {JSON.stringify({ message: "Hello from Bun server!" }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;
