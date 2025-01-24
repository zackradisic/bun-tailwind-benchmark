import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a simple fullstack React app powered by Bun and Tailwind CSS.
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Click Me!
      </button>
      <div className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response</h2>
        <button
          className="mt-3 px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
          onClick={() => fetch('/api/data')
            .then(response => response.json())
            .then(data => alert(JSON.stringify(data)))}
        >
          Fetch Data
        </button>
      </div>
    </div>
  );
};

export default App;
