import React from 'react';

const BunDemoComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Experience the Speed of Bun!</h1>
      <p className="text-xl text-gray-700 mb-6">Building fullstack applications just got easier and faster.</p>
      <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-1/2">
        <h2 className="text-2xl font-semibold text-green-500">Try it out:</h2>
        <pre className="bg-gray-200 p-4 rounded mt-2">
          <code className="text-sm text-gray-800">
            {`$ bun run app.ts`}
          </code>
        </pre>
        <p className="text-gray-600 mt-4">With Bun, you can serve your frontend and backend effortlessly!</p>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default BunDemoComponent;
