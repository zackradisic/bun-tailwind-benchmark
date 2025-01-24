import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-10">This app is built with Bun, React, and TypeScript.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200">
        Click Me
      </button>
      <div className="mt-10 space-y-4">
        <div className="p-4 bg-white shadow-md rounded">
          <h2 className="text-2xl font-semibold">Server Response:</h2>
          <pre className="text-sm text-gray-500">Fetching data from server...</pre>
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h2 className="text-2xl font-semibold">API Interaction</h2>
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Fetch Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
