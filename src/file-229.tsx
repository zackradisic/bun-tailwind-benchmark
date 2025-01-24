import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack application built with React, TypeScript, and Tailwind CSS.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800">Client-Side Rendering</h2>
          <p className="text-gray-600">
            We leverage React for building interactive UI components with smooth updates.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800">Server Implementation</h2>
          <p className="text-gray-600">
            Bun's server enables seamless API integration alongside our React frontend.
          </p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Explore More
      </button>
    </div>
  );
};

export default App;
