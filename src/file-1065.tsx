import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun with Tailwind
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a demo of Bun's fullstack integration with TailwindCSS!
      </p>
      <button className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600 transition">
        Click Me!
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">API Data:</h2>
        <div className="border border-gray-300 p-4 mt-2 rounded shadow-md">
          <pre className="text-sm text-gray-800">
            {JSON.stringify(
              fetch('/api/users').then(res => res.json()),
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default App;
