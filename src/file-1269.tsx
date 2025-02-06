import "./style.css";
import React from 'react';

const BunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Fast & Simple Fullstack Development!</h1>
      <p className="text-lg text-gray-700 mb-8">Using Bun with Tailwind makes it a breeze to build applications.</p>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105">
          <h2 className="text-3xl font-semibold text-green-500">Instant Setup</h2>
          <p className="text-gray-600">Get your server running with a few lines of code.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105">
          <h2 className="text-3xl font-semibold text-yellow-500">Integrated API</h2>
          <p className="text-gray-600">Easily handle API requests right from your app.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105">
          <h2 className="text-3xl font-semibold text-purple-500">Incredible Speed</h2>
          <p className="text-gray-600">Experience lightning-fast performance with minimal setup.</p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-sm text-gray-500">© 2023 Bun Development</p>
      </footer>
    </div>
  );
}

export default BunDemo;
