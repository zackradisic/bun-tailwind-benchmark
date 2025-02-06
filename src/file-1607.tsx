import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Bun & Tailwind!</h1>
        <p className="mt-4 text-lg text-gray-600">Creating fullstack applications has never been easier.</p>
        <button className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Server Response:</h2>
          {/* Placeholder for server response data */}
          <div className="mt-2 p-4 border border-gray-300 rounded bg-gray-100">
            <p className="text-gray-700">Fetch some exciting data from our API!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
