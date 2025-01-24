import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My App</h1>
      <p className="text-lg text-gray-700 mb-8">This is a demo of Bun's Tailwind integration!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-500">Client Part</h2>
          <p className="text-gray-600 mt-2">This section showcases the client-side rendering.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            Click Me!
          </button>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-500">Server Part</h2>
          <p className="text-gray-600 mt-2">This section handles API requests.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none">
            Fetch Data
          </button>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-500">Integration</h2>
          <p className="text-gray-600 mt-2">Effortlessly integrates with Bun's bundler.</p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
