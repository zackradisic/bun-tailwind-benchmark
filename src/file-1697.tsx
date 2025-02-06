import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun & Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-10">
        This is a demo application built with Bun, React, and TypeScript showcasing the power of TailwindCSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">Fast API</h2>
          <p className="text-gray-600">Fetch data from Bun's fast backend through API requests seamlessly!</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Get Data
          </button>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">Thrive with Tailwind</h2>
          <p className="text-gray-600">Design your components effortlessly with Tailwind's utility-first approach!</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
