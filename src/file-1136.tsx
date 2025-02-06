import "./style.css";
import React from 'react';

const BunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Experience the Speed of <span className="text-red-500">Bun</span>
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Harness the power of fullstack development with Bun's new features.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-green-500">Fast Setup</h2>
          <p className="text-gray-600">
            Start your project in seconds. Just run <code className="font-mono">bun create</code> and you’re ready to go.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-green-500">Single Command</h2>
          <p className="text-gray-600">
            Bundle frontend and backend with a single command. <code className="font-mono">bun serve</code>.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-green-500">Incredible Performance</h2>
          <p className="text-gray-600">
            Built for speed, Bun serves your application faster than ever.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-green-500">Integrate Easily</h2>
          <p className="text-gray-600">
            Use Tailwind and other tools with seamless integration.
          </p>
        </div>
      </div>
      <footer className="mt-8 text-gray-500">
        <p>Join the Bun community today!</p>
      </footer>
    </div>
  );
};

export default BunDemo;
