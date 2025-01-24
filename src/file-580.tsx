import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Bun + Tailwind Demo
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Building fullstack applications just got easier!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Client Side</h2>
          <p className="text-gray-600">
            Rendered with React and TypeScript, this component is responsive and works seamlessly with Tailwind CSS.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Server Side</h2>
          <p className="text-gray-600">
            Connected to Bun's server for API requests, enabling a streamlined fullstack experience.
          </p>
        </div>
      </div>
      <button className="mt-6 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
        Explore More
      </button>
    </div>
  );
};

export default App;
