import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
        🚀 Bun: Fast and Simple Fullstack Dev
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Build applications in record time with <span className="font-bold">Bun</span>!
      </p>
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            Easy to set up and use
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            Built-in Tailwind integration
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            Fullstack API routes
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            Lightning-fast performance
          </li>
        </ul>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Built with ❤️ using Bun</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleBun;
