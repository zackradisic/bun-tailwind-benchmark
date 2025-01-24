import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind + React!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
          Client Action
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">
          Server Action
        </button>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-500">API Call Result:</p>
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
          <pre className="text-gray-700 overflow-x-auto">{JSON.stringify({ message: "Hello from Bun API!" }, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
