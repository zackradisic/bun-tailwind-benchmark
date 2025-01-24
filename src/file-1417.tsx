import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Bun with TailwindCSS
      </h1>
      <div className="mt-6">
        <p className="text-lg text-gray-600">
          Build fullstack applications effortlessly.
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
