import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack app using Bun, React, and TypeScript.</p>
      <button className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
        Click Me
      </button>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
        <div id="response" className="mt-2 p-4 bg-white shadow rounded">
          <p className="text-gray-600">Fetching data...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
