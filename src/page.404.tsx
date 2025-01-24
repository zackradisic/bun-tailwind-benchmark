import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun & Tailwind!</h1>
      <p className="text-xl text-gray-700 mb-10">Building fullstack applications has never been easier.</p>
      <div className="flex flex-wrap justify-center">
        <div className="p-4 m-2 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600">This is your React component running on the client.</p>
        </div>
        <div className="p-4 m-2 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-500">Server Side</h2>
          <p className="text-gray-600">Easily handle API requests using Bun's server!</p>
        </div>
      </div>
      <button className="mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default App;
