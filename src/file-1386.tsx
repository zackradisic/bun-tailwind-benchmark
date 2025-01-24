import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Unlock Your Fullstack Potential!</h1>
        <p className="text-gray-700 text-base mb-4">
          With <span className="text-green-500 font-semibold">Bun</span>, building fast fullstack applications is as easy as pie!
        </p>
        <div className="flex items-center justify-between mt-6">
          <a href="#" className="inline-block rounded-md bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition duration-200">
            Get Started
          </a>
          <span className="text-sm text-gray-500">Page 34 of 2048</span>
        </div>
        <div className="mt-5">
          <ul className="list-disc pl-5 text-gray-600">
            <li className="mb-2">📦 Easy bundling with <span className="font-semibold">Bun</span></li>
            <li className="mb-2">⚡ Lightning-fast performance</li>
            <li className="mb-2">🔧 Simple integration with Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FastAndSimpleBun;
