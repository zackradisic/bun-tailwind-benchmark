import React from 'react';

const FastSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">
        🚀 Fast & Simple Fullstack with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the power and speed of building applications with Bun and TailwindCSS!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Seamless Integration</h2>
          <p className="text-gray-600">
            Integrate your frontend and backend effortlessly. No extra steps required!
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-purple-500 mb-2">TailwindCSS Ready</h2>
          <p className="text-gray-600">
            Use TailwindCSS to build beautiful UIs quickly while maintaining responsiveness.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition ease-in-out duration-200">
          Get Started Now!
        </button>
      </div>
    </div>
  );
};

export default FastSimpleBun;
