import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun's Fullstack App!
      </h1>
      <p className="text-lg text-gray-700">This is a demonstration of the new Bun plugin for Tailwind CSS.</p>
      <div className="mt-8 space-y-4">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
        <p className="text-gray-500">Server Response:</p>
        <div className="p-4 bg-white shadow rounded-lg">
          <pre className="text-sm text-gray-800">{`await fetch('/api/hello')
  .then(response => response.json())
  .then(data => console.log(data));`}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
