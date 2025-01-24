import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-gray-700 mb-8">Building fullstack applications has never been easier!</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-500">Frontend</h2>
          <p className="text-gray-600">Use React seamlessly with Tailwind CSS.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-500">Backend</h2>
          <p className="text-gray-600">Handle API requests with ease in Bun.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-500">Deployment</h2>
          <p className="text-gray-600">Run your app with a single command.</p>
        </div>
      </div>
      <footer className="mt-12">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </footer>
    </div>
  );
};

export default App;
