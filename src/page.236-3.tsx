import React from 'react';

const BunTailwindDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the power of building fullstack applications with incredible speed!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl px-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-indigo-600">Fast & Simple</h2>
          <p className="text-gray-500 mt-2">
            With Bun's fullstack capabilities, you can run frontend and backend in your app effortlessly.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-indigo-600">Seamless Integration</h2>
          <p className="text-gray-500 mt-2">
            Integrate Tailwind CSS easily for an elegant design that enhances user experience.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-indigo-600">Real-time Development</h2>
          <p className="text-gray-500 mt-2">
            Enjoy rapid development with hot reloading, ensuring quick iteration and testing.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-indigo-600">One Command</h2>
          <p className="text-gray-500 mt-2">Run your app with a single command: <code className="bg-gray-200 p-1 rounded">bun run app.ts</code></p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-gray-600">Built with 🛠️ by Bun Team</p>
      </footer>
    </div>
  );
};

export default BunTailwindDemo;
