import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Experience the Speed of Bun 🚀
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Build fullstack applications effortlessly with Bun and Tailwind CSS!
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Why Choose Bun?
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2 text-gray-600">Fast and efficient bundling</li>
          <li className="mb-2 text-gray-600">Fullstack capabilities</li>
          <li className="mb-2 text-gray-600">Easy integration with TailwindCSS</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
      <footer className="absolute bottom-4 text-gray-500">
        Page 34 of 2048
      </footer>
    </div>
  );
};

export default FastBunDemo;
