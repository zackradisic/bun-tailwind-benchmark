import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-500">Frontend</h2>
          <p className="text-gray-600">Leverage React to build responsive UIs.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-purple-500">Backend</h2>
          <p className="text-gray-600">Utilize Bun's server capabilities for seamless API integration.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-red-500">Fullstack</h2>
          <p className="text-gray-600">All in one place with no extra steps.</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default App;
