import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">Build Fast, Fullstack Apps with React & TypeScript</p>
      <div className="flex flex-wrap justify-around w-full max-w-5xl">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition duration-300">Get Started</button>
        <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
          <h2 className="text-xl font-semibold text-green-500">Server Data</h2>
          <p className="text-gray-600">Fetch APIs seamlessly using Bun's fetch handler!</p>
        </div>
      </div>
      <footer className="absolute bottom-0 p-4 bg-gray-200 w-full text-center">
        <p className="text-sm text-gray-600">Powered by Bun + Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
