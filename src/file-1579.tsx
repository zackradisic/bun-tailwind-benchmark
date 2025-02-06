import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <h1 className="text-4xl font-bold text-white mb-4">
        Welcome to Bun with Tailwind!
      </h1>
      <p className="text-lg text-white mb-8">
        This is a sample fullstack application using React, TypeScript, and Tailwind CSS.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Client Component</h2>
          <p className="text-gray-600">This component displays data fetched from the server.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Server Component</h2>
          <p className="text-gray-600">This component handles your API requests.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Fetch Data
      </button>
    </div>
  );
};

export default App;
