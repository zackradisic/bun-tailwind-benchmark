import React from "react";

const FastAndSimpleApp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Build Fullstack Apps with Bun
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the speed and simplicity of using Bun for fullstack development!
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="m-4 p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-green-600">Fast</h2>
          <p className="text-gray-600">
            Instant bundling and hot reloading for rapid development.
          </p>
        </div>
        <div className="m-4 p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-500">Simple</h2>
          <p className="text-gray-600">
            Minimal configuration to get you started quickly.
          </p>
        </div>
        <div className="m-4 p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-red-500">Powerful</h2>
          <p className="text-gray-600">
            Fullstack capabilities with backend and frontend integration.
          </p>
        </div>
      </div>
      <footer className="mt-10 text-gray-500">
        <p>Built with ❤️ using Bun and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleApp;
