import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">Powered by Bun, React & TypeScript</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Client Side</h2>
          <p className="text-gray-600">This is a fast frontend powered by React.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Server Side</h2>
          <p className="text-gray-600">Seamless backend integration with Bun's fetch API.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Fullstack</h2>
          <p className="text-gray-600">Your complete application in one simple setup!</p>
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default App;
