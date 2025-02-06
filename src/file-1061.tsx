import "./style.css";
import React from 'react';

const BunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fast with Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">Experience the power of fullstack applications in seconds.</p>
      <div className="flex flex-wrap justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
          <h2 className="text-2xl font-semibold text-green-500">Simple Setup</h2>
          <p className="text-gray-600">Just import your HTML and serve it with Bun!</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
          <h2 className="text-2xl font-semibold text-red-500">Fast Development</h2>
          <p className="text-gray-600">Hot reloading makes changes instant!</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
          <h2 className="text-2xl font-semibold text-purple-500">All-in-One</h2>
          <p className="text-gray-600">Run your backend and frontend with ease.</p>
        </div>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Powered by <span className="font-semibold text-blue-600">Bun</span></p>
      </footer>
    </div>
  );
};

export default BunDemo;
