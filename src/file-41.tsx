import React from 'react';

const FastAndSimpleBun: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of building applications with Bun.
      </p>
      <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition duration-300">
        Get Started
      </button>
      <div className="mt-10 space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Fast Development</h2>
          <p className="text-gray-600">
            Build and run your fullstack application with rapid iteration.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Seamless Integration</h2>
          <p className="text-gray-600">
            Integrate TailwindCSS effortlessly with bun-plugin-tailwind.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Deploy with Ease</h2>
          <p className="text-gray-600">
            Deploy your app with minimal configuration and maximum speed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FastAndSimpleBun;
