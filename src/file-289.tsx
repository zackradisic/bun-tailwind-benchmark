import "./style.css";
import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Experience the Speed of Bun
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
        Build fullstack applications effortlessly with Bun's powerful integration and lightning-fast performance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-500">Frontend Development</h2>
          <p className="text-gray-600 mt-2">Create stunning UIs with React and Tailwind CSS easily.</p>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-red-500">Backend Integration</h2>
          <p className="text-gray-600 mt-2">Seamlessly handle API requests with Bun's integrated server.</p>
        </div>
      </div>
      <a href="/dashboard" className="mt-8 inline-block px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
        Go to Dashboard
      </a>
    </div>
  );
};

export default FastBunDemo;
