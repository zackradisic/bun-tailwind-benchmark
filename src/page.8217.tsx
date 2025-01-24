import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Client-side Rendering</h2>
          <p className="mt-2 text-gray-600">Using React and Bun, your components render instantly!</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800">Server-side Handling</h2>
          <p className="mt-2 text-gray-600">Fetch data from your Bun backend efficiently.</p>
        </div>
      </div>
      <div className="mt-10">
        <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
