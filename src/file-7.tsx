import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bun Fullstack App!</h1>
      <p className="mt-4 text-lg text-gray-700">This component showcases seamless integration with TailwindCSS.</p>
      <div className="mt-6 space-y-4">
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition transform hover:-translate-y-1">
          Click Me
        </button>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition transform hover:-translate-y-1">
          Another Action
        </button>
      </div>
      <footer className="mt-10 text-sm text-gray-500">Powered by Bun and TailwindCSS</footer>
    </div>
  );
};

export default App;
