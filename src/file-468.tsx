import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Bun + React</h1>
      <p className="text-lg text-gray-700 mb-4">Building fullstack applications has never been easier!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-500">Client Side</h2>
          <p className="text-gray-600 mt-2">
            With Bun's robust integration with Tailwind CSS, you can rapidly prototype and deploy stunning UIs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-purple-500">Server Side</h2>
          <p className="text-gray-600 mt-2">
            Utilize Bun's server capabilities for efficient API handling without any hassle.
          </p>
        </div>
      </div>

      <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Get Started
      </button>
    </div>
  );
};

export default App;
