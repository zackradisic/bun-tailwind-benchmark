import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is an example of a fullstack application built with Bun, React, and TypeScript using Tailwind CSS.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-600">Server Part</h2>
          <p className="text-gray-600">Here’s where we connect to our server to fetch data!</p>
          <button className="mt-3 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
            Fetch Data
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-purple-600">Client Part</h2>
          <p className="text-gray-600">This represents our interactive UI powered by React.</p>
          <button className="mt-3 px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600">
            Update UI
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
