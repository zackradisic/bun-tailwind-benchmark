import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-xl text-white mb-6">Fast, simple, and ready for fullstack development.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p>Built with React and powered by Tailwind CSS.</p>
        </div>
        <div className="p-6 bg-white rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p>APIs served seamlessly via Bun!</p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default App;
