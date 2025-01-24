import React from "react";

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Experience the Speed of Bun
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Build fullstack applications effortlessly with Bun and Tailwind CSS!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Fast
          </h2>
          <p className="text-center text-gray-600">
            Experiencing speed like never before in your development workflow.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Simple
          </h2>
          <p className="text-center text-gray-600">
            Configure your Bun server with just a few lines of code.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Fullstack
          </h2>
          <p className="text-center text-gray-600">
            Seamlessly integrate frontend and backend with ease.
          </p>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-300">
        Get Started with Bun
      </button>
    </div>
  );
};

export default FastAndSimpleBun;
