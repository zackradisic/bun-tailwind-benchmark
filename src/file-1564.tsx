import "./style.css";
import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Experience Lightning-Fast Fullstack Development with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        With Bun's new Tailwind integration, building applications has never been easier or faster.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          Key Features
        </h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600 mb-2">
            🚀 Instant HTML routing with `Bun.serve()`
          </li>
          <li className="text-gray-600 mb-2">
            ⚡ Fast API handling with inbuilt request routing
          </li>
          <li className="text-gray-600 mb-2">
            🎨 TailwindCSS support for rapid UI styling
          </li>
          <li className="text-gray-600 mb-2">
            🔥 Hot-reload your changes and see updates instantly
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Get Started with Bun!
        </button>
      </div>
    </div>
  );
};

export default FastBunDemo;
