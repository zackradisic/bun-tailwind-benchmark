import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Welcome to Bun Fullstack App!</h1>
      <p className="text-lg text-gray-700 mb-10">Built with React, TypeScript, and Tailwind CSS</p>
      <button className="px-6 py-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
        Click Me!
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Server Endpoint</h2>
          <p className="text-gray-600">Fetch data from your API seamlessly with Bun's server.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Client Side</h2>
          <p className="text-gray-600">Experience the smooth client rendering and hot reloads.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Easy Setup</h2>
          <p className="text-gray-600">Quickly get started with Bun's fullstack capabilities.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
