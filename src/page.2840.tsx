import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-extrabold text-white mb-4">
        Welcome to Bun with Tailwind CSS!
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Build your fullstack React applications effortlessly!
      </p>
      <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-200">
        Get Started
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="p-5 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-2">Fast Development</h2>
          <p className="text-gray-700">Instant feedback with Bun's hot reloading.</p>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-2">Seamless Integration</h2>
          <p className="text-gray-700">Easily integrate Tailwind into your workflow.</p>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-2">API Simplified</h2>
          <p className="text-gray-700">Manage your backend with minimal setup.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
