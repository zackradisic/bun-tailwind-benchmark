import React from "react";

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Experience the Speed of Bun
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Build fullstack applications with ease using Bun and TailwindCSS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Fast</h2>
          <p className="text-gray-600">
            Enjoy lightning-fast builds and hot reloading.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Simple</h2>
          <p className="text-gray-600">
            Deploy your frontend and backend with no configuration hassle.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800">Integrated</h2>
          <p className="text-gray-600">
            Seamlessly combine your HTML, CSS, and JS files.
          </p>
        </div>
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default FastAndSimpleBun;
