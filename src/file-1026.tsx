import "./style.css";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Build fullstack applications easily!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Client-side</h2>
          <p className="text-gray-600">Rendered with React and styles from Tailwind.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Server-side</h2>
          <p className="text-gray-600">Handle requests effortlessly using Bun!</p>
        </div>
      </div>
      <button className="mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
        Click Me
      </button>
    </div>
  );
};

export default App;
