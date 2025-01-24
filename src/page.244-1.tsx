import React from 'react';

const FastBunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
        🚀 Fast Fullstack Apps with Bun!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience lightning-fast development with Bun and TailwindCSS.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-500 mb-2">Simple Setup</h2>
          <p className="text-gray-600">
            All you need is to run `Bun.serve()` to get your server up and running.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-2">Fast Development</h2>
          <p className="text-gray-600">
            With hot reloading and minimal configuration, see your changes instantly!
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-500 mb-2">Fullstack Ready</h2>
          <p className="text-gray-600">
            Serve both frontend and backend seamlessly in one application.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Tailwind Integration</h2>
          <p className="text-gray-600">
            Leverage Tailwind's utility-first classes for rapid UI development!
          </p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Bun Demo</p>
      </footer>
    </div>
  );
};

export default FastBunDemo;
